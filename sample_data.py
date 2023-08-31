from book_library_app.models import Author
from datetime import date
from book_library_app import db
from book_library_app import app

a1 = Author(first_name="Jan", last_name="Kowalski", birth_date=date(1990,1,1))
a2 = Author(first_name="Anna", last_name="Tomaszewska", birth_date=date(1990,2,2))

# print(a1)

# with app.app_context():
    # db.create_all()
    # db.session.add(a1)
    # db.session.add(a2)
    # db.session.commit()
    # print(Author.query.all())
    # db.drop_all()