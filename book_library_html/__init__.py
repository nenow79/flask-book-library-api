from flask import Blueprint, render_template

web_bp = Blueprint('web', __name__, template_folder='templates',static_folder='static')
# web_bp = Blueprint('web', __name__)

@web_bp.route('/')
def home():
    return render_template('index.html')

@web_bp.route('/register')
def register():
    return render_template('register.html')

@web_bp.route('/authors')
def authors():
    return render_template('authors.html')

@web_bp.route('/login')
def login():
    return render_template('login.html')

