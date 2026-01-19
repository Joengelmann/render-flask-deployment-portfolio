from flask import Flask, render_template
import yaml, os

app = Flask(__name__)

def load_yaml(path):
    with open(path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)

@app.route("/")
def home():
    projects = load_yaml(os.path.join("data", "projects.yaml")) or []
    experience = load_yaml(os.path.join("data", "experience.yaml")) or []
    publications = load_yaml(os.path.join("data", "publications.yaml")) or []

    projects = sorted(projects, key=lambda x: x.get("date",""), reverse=True)
    publications = sorted(publications, key=lambda x: str(x.get("year","")), reverse=True)

    return render_template(
        "index.html",
        projects=projects,
        experience=experience,
        publications=publications
    )

if __name__ == "__main__":
    app.run(debug=True)
