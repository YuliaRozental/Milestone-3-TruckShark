from flask_sqlalchemy import SQLAlchemy 

db = SQLAlchemy()

class TruckModel(db.Model):
    __tablename__ =  'facts'

    serialize_only = ('id', 'submitter', 'fact') 
    
    id = db.Column(db.Integer, primary_key = True) 
    submitter = db.Column(db.String(250)) 
    fact = db.Column(db.Text)

    @property
    def serialized(self):
        return {
            'id': self.id,
            'submitter': self.submitter,
            'fact': self.fact
        }
    