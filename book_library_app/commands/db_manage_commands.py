import json
from pathlib import Path
from datetime import datetime
from sqlalchemy.sql import text
from book_library_app import db
from book_library_app.models import Author, Book
from book_library_app.commands import db_manage_bp


def load_json_data(file_name: str) -> list:
     json_path = Path(__file__).parent.parent / 'samples' / file_name
     with open(json_path) as file:
         data_json = json.load(file)
         return data_json

@db_manage_bp.cli.group()
def db_manage():
    """Database management commands"""
    pass

@db_manage.command()
def add_data():
    """Add sample data to database"""
    try:
        data_json = load_json_data('authors.json')
        for item in data_json:
            item['birth_date'] = datetime.strptime(item['birth_date'], '%d-%m-%Y').date()
            author = Author(**item)
            db.session.add(author)

        data_json = load_json_data('books.json')
        for item in data_json:
            book = Book(**item)
            db.session.add(book)

        db.session.commit()
        print('Data has been successfuly added to database')
    except Exception as e:
         print("Unexpected error: ",e)
    

@db_manage.command()
def remove_data():
    """Remove data from database"""
    try:
        db.session.execute(text('DELETE FROM books'))
        db.session.execute(text('ALTER TABLE books AUTO_INCREMENT =1'))
        db.session.execute(text('DELETE FROM authors'))
        db.session.execute(text('ALTER TABLE authors AUTO_INCREMENT =1'))
        db.session.commit()
        print('Data has been successfuly deleted')
    except Exception as e:
        print("Unexpected error: ",e)