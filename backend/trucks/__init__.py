# config
from distutils.log import debug
from flask import Flask, render_template, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, JWTManager, get_jwt, get_jwt_identity, jwt_required, unset_jwt_cookies
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import json
from flask_cors import CORS

from . import models

# factory


def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config["JWT_SECRET_KEY"] = "chane-this"
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
    jwt = JWTManager(app)

    # database config
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123qwe@localhost:5432/truckshark'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    models.db.init_app(app)
    migrate = Migrate(app, models.db)

    @app.after_request
    def refresh_expiring_jwts(response):
        try:
            exp_timestamp = get_jwt()["exp"]
            now = datetime.now(timezone.utc)
            target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
            if target_timestamp > exp_timestamp:
                access_token = create_access_token(identity=get_jwt_identity())
                data = response.get_json()
                if type(data) is dict:
                    data["access_token"] = access_token
                    response.data = json.dumps(data)
            return response
        except (RuntimeError, KeyError):
            # Case where there is not a valid JWT. Just return the original respone
            return response

    @app.route('/token', methods=["POST"])
    def create_token():
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        if email != "test" or password != "test":
            return {"msg": "Wrong email or password"}, 401

        access_token = create_access_token(identity=email)
        response = {"access_token": access_token}
        return response

    @app.route("/logout", methods=["POST"])
    def logout():
        response = jsonify({"msg": "logout successful"})
        unset_jwt_cookies(response)
        return response

    @app.route('/profile')
    @jwt_required()
    def my_profile():
        response_body = {
            "name": "Dog",
            "about": "Hello! I'm a dog"
        }
        return response_body

    # register truck blueprint
    from . import truck
    app.register_blueprint(truck.bp)

    # register fact blueprint
    from . import fact
    app.register_blueprint(fact.bp)

    return app
