
class User:
    def __init__(self, name, location, phone, email, description, rating):
        self.name = name
        self.location = location
        self.phone = phone
        self.email = email
        self.description = description
        self.rating = rating

    def save_to_db(self, conn):
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO [User] (name, location, phone, email, description, rating)
            OUTPUT INSERTED.id
            VALUES (?, ?, ?, ?, ?, ?)
        """, (self.name, self.location, self.phone, self.email, self.description, self.rating))
        user_id = cursor.fetchone()[0]
        conn.commit()
        return user_id

    @staticmethod
    def get_by_id(conn, user_id):
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM [User] WHERE id = ?", user_id)
        row = cursor.fetchone()
        if row:
            return {
                "id": row.id,
                "name": row.name,
                "location": row.location,
                "phone": row.phone,
                "email": row.email,
                "description": row.description,
                "rating": row.rating,
            }
        return None
    
    @staticmethod
    def get_by_email(conn, email):
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM [User] WHERE email = ?", (email))
        row = cursor.fetchone()
        if row:
            return {
                "id": row.id,
                "name": row.name,
                "location": row.location,
                "phone": row.phone,
                "email": row.email,
                "description": row.description,
                "rating": row.rating,
            }
        return None