from flask import Flask

# Create the app
app = Flask(__name__)

# Define a single route
@app.route("/")
def home():
    return "<h1>Jonah's Portfolio</h1><p>This is my Portfolio</p>"

# Only run the server when executed directly
if __name__ == "__main__":
    app.run()
