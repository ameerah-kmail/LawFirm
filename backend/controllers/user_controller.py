from flask import Blueprint, request, jsonify
from db import connect_db
from models import User

user_bp = Blueprint('user', __name__)

@user_bp.route('/api/register', methods=['POST'])
def register_user():
    data = request.json
    conn = connect_db()
    
    existing_user = User.get_by_email(conn, data['email'])
    if existing_user:
        return jsonify({"error": "User with this email already exists"}), 400
    
    user = User(
        name=data['name'],
        location=data['location'],
        phone=data['phone'],
        email=data['email'],
        description=data['description'],
        rating=data['rating']
    )
    
    id = user.save_to_db(conn)
    return jsonify({"id": id})

@user_bp.route('/api/profile/<int:id>', methods=['GET'])
def get_profile(id):
    conn = connect_db()
    user_data = User.get_by_id(conn, id)
    if user_data:
        return jsonify(user_data)
    else:
        return jsonify({"error": "User not found"}), 404