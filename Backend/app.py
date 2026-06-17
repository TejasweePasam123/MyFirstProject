from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import bcrypt

# ✅ CREATE APP FIRST
app = Flask(__name__)
CORS(app)

# 🔗 MongoDB connection
client = MongoClient(
    #"mongodb+srv://pasam_tejaswee:IeJeQLrCaf4XfPiX@cluster0.lfwormv.mongodb.net/mydb"
    "mongodb+srv://pasam_tejaswee:India@123#789@cluster0.lfwormv.mongodb.net/mydb"
)

db = client["mydb"]
collection = db["users"]

# ✅ TEST ROUTE (OPTIONAL)
@app.route("/")
def home():
    return "Backend is running"

# ✅ REGISTER
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"message": "Missing fields"}), 400

    if collection.find_one({"username": username}):
        return jsonify({"message": "User already exists"}), 400

    hashed = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

    collection.insert_one({
        "username": username,
        "password": hashed.decode("utf-8")
    })

    return jsonify({"message": "User registered successfully"})

# ✅ LOGIN
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    user = collection.find_one({"username": username})
    if not user:
        return jsonify({"message": "Invalid credentials"}), 401

    if bcrypt.checkpw(password.encode("utf-8"), user["password"].encode("utf-8")):
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid credentials"}), 401

# ✅ VIEW DATA
@app.route("/data", methods=["GET"])
def data():
    users = list(collection.find({}, {"_id": 0}))
    return jsonify(users)

# ✅ START SERVER (LAST LINE)
if __name__ == "__main__":
    # app.run(host="127.0.0.1", port=5000, debug=False)
    app.run(host="0.0.0.0", port=5000, debug=False)

