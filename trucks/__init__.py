#config
from flask import Flask, render_template 
import os

#factory
def create_app(): 
    app = Flask(__name__)

    picFolder = os.path.join('static', 'assets')

    app.config['UPLOAD_FOLDER'] = picFolder


    # index route
    @app.route("/")
    def index(): 
        pic1 = os.path.join(app.config['UPLOAD_FOLDER'], 'paula-vermeulen-URjZkhqsuBk-unsplash.jpg')
        return render_template("index.html", user_image = pic1)

    # register truck blueprint
    from . import truck
    app.register_blueprint(truck.bp)

    return app
