#config
from flask import Flask, render_template, request, jsonify
from flask_jwt_extended import create_access_token, JWTManager, get_jwt, get_jwt_identity, jwt_required, unset_jwt_cookies
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os

#factory
def create_app(): 
    app = Flask(__name__)

    picFolder = os.path.join('static', 'assets')

    app.config['UPLOAD_FOLDER'] = picFolder

    app.config["JWT_SECRET_KEY"] = "please-remember"
    jwt = JWTManager(app)
    
    # database config
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123qwe@localhost:5432/truckshark'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    from . import models
    models.db.init_app(app)
    migrate = Migrate(app, models.db)      

    # index route
    @app.route("/")
    def index(): 
        pic1 = os.path.join(app.config['UPLOAD_FOLDER'], 'isaac-benhesed--4K1IMX_EQc-unsplash.jpg')
        return render_template("index.html", user_image=pic1)

    @app.route('/token', methods=["POST"])
    def create_token():
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        if email != "test" or password != "test":
            return {"msg": "Wrong email or password"}, 401

        access_token = create_access_token(identity=email)
        response = {"access_token":access_token}
        return response


    @app.route('/profile')
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
