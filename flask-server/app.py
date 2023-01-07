# config                    
from flask import Flask
app = Flask(__name__)

# index route
@app.route("/members")
def members(): 
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5001, debug=True)
