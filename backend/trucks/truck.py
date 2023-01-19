from flask import (Blueprint, jsonify)
from . import models

bp = Blueprint('truck', __name__, url_prefix="/trucks")


@bp.route('/')
def index():
    trucks = models.TruckModel.query.all()
    return jsonify({
        'data': [result.serialized for result in trucks]
    })


@bp.route('/<int:truck_id>')
def truck(truck_id):
    truck = models.TruckModel.query.filter_by(id=truck_id).first()
    return jsonify({
        'data': truck.serialized
    })
