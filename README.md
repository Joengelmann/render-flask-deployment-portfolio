# Jonah Engelmann Portfolio

This is the source code for my personal portfolio website, built with **Flask**, **Jinja**, and vanilla web technologies (HTML, CSS, JS).  
It showcases my experience, featured projects, and contact information.

🌐 **Live Deployment:** [jonahengelmannportfolio.onrender.com](https://jonahengelmannportfolio.onrender.com)

---

## 🚀 Features

- **Dynamic Experience & Projects**: Loaded from YAML files (`data/experience.yaml` and `data/projects.yaml`) for easy updates.
- **Responsive Design**: Custom CSS and JavaScript for theming, dark mode toggle, and interactive UI.
- **Featured & Other Projects**: Highlight selected projects with live demo/code/report links.
- **Interactive Timeline**: Expandable/collapsible experience details.
- **Modal Project Details**: View detailed highlights and links without leaving the page.

---

## 📂 Project Structure

```
.
├── app.py                  # Flask application entry point
├── requirements.txt        # Python dependencies
├── data/                   # YAML data files for dynamic content
│   ├── experience.yaml
│   └── projects.yaml
├── static/                 # Static assets (JS, CSS, images, PDFs)
│   ├── main.js             # Handles theme toggle, modals, experience expand/collapse
│   ├── styles.css          # Site-wide styles (light/dark themes, responsive layouts)
│   ├── img/                # Images (headshot, project images, logos, favicon, etc.)
│   └── report/             # Project report PDFs
├── templates/              # Jinja2 HTML templates
│   ├── index.html          # Main portfolio page (experience, projects, contact)
│   └── layout.html         # Base layout with header, footer, nav, theme toggle
└── README.md               # Project documentation
```

---

## ⚙️ Setup & Local Development

1. **Clone the repo**
   ```bash
   git clone https://github.com/Joengelmann/portfolio.git
   cd portfolio
   ```

2. **Create and activate a virtual environment**
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate   # Mac/Linux
   .venv\Scripts\activate    # Windows
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run locally**
   ```bash
   flask run
   ```
   By default, it runs at `http://127.0.0.1:5000/`.

---

## 📦 Deployment

This project is deployed on **Render**.  
The `requirements.txt` file ensures dependencies are installed automatically.  
Render serves the Flask app defined in `app.py`.

---

## 🛠 Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Templating**: Jinja2
- **Data**: YAML files (`experience.yaml`, `projects.yaml`)
- **Deployment**: Render

---

## 👤 Author

**Jonah Engelmann**  
- [GitHub](https://github.com/Joengelmann)  
- [LinkedIn](https://tinyurl.com/3jbkh45p)  
- 📧 [Jonah.Engelmann@gmail.com](mailto:Jonah.Engelmann@gmail.com)
