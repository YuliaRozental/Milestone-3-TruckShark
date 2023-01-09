#config
from flask import Flask, render_template 
from flask_migrate import Migrate 
import os

#factory
def create_app(): 
    app = Flask(__name__)

    picFolder = os.path.join('static', 'assets')

    app.config['UPLOAD_FOLDER'] = picFolder
    
    # database config
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123qwe@localhost:5432/truckshark'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    from . import models
    models.db.init_app(app)
    migrate = Migrate(app, models.db)      

    # index route
    @app.route("/")
    def index(): 
        return render_template("index.html")

    # register truck blueprint
    from . import truck
    app.register_blueprint(truck.bp)

    # register fact blueprint 
    from . import fact
    app.register_blueprint(fact.bp)

    return app
