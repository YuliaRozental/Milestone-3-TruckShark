from flask import ( Blueprint, render_template )
import json

trucks = json.load(open('trucks.json'))

bp = Blueprint('truck', __name__, url_prefix="/trucks")

@bp.route('/')
def index(): 
    return render_template('trucks/trucks.html', trucks=trucks)

@bp.route('/<int:id>')
def truck(id): 
    truck = trucks[id - 1]
    return render_template('trucks/index.html', truck=truck)