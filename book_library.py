from book_library_app import create_app

app = create_app()

# html part
from book_library_html import web_bp
app.register_blueprint(web_bp,url_prefix="/book-library")
# app.register_blueprint(web_bp)

@app.route('/')
def index():
    return 'hello'


