import pyodbc

# Define the connection string
connection_string = (
    "Driver={ODBC Driver 18 for SQL Server};"
    "Server=tcp:legistai-test.database.windows.net,1433;"
    "Database=legistai-test;"
    "Uid=legistaitest;"
    "Pwd=admin@123;"
    "Encrypt=yes;"
    "TrustServerCertificate=no;"
    "Connection Timeout=30;"
)

# Establish the database connection
def connect_db():
    try:
        conn = pyodbc.connect(connection_string)
        print("Connection successful")
        return conn
    except Exception as e:
        print("Error connecting to the database:", str(e))
        return None
