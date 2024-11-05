from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from db import connect_db
from flask_cors import CORS
from controllers.user_controller import user_bp

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://legistaitest:admin@123@legistai-test.database.windows.net:1433/legistai-test?driver=ODBC+Driver+18+for+SQL+Server'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

@app.route('/')
def index():
    conn = connect_db()
    if conn:
        # Sample query
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM [User]")
        result = cursor.fetchall()
        conn.close()
        return str(result)
    return "Error"

@app.route('/tables', methods=['GET'])
def get_tables_and_columns():
    conn = connect_db()
    if conn:
        cursor = conn.cursor()
        
        # Get all table names
        cursor.execute("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE'")
        tables = cursor.fetchall()
        
        table_info = {}
        for table in tables:
            table_name = table[0]
            # Get column names for each table
            cursor.execute(f"SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '{table_name}'")
            columns = cursor.fetchall()
            table_info[table_name] = [column[0] for column in columns]

        conn.close()
        return jsonify(table_info)
    return jsonify({"error": "Error connecting to the database."})

  
app.register_blueprint(user_bp)
    
if __name__ == "__main__":
    app.run()