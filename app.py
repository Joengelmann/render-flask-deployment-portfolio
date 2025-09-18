from flask import Flask

# Create the app
app = Flask(__name__)

# Define a single route
@app.route("/")
def home():
    return "<h1>My Portfolio is currently under construction. Come back later</h1><p></p>"

# Only run the server when executed directly
if __name__ == "__main__":
    app.run()
