# JSON File Reader

A powerful, modern web application for uploading and viewing JSON files with syntax highlighting and formatting features.

*Click the link above to use the application immediately - no downloads or installations required!*

## 📚 Documentation

- 📖 **[README](README.md)** - You are here
- 📋 **[Changelog](CHANGELOG.md)** - Version history and updates
- 🤝 **[Contributing](CONTRIBUTING.md)** - How to contribute to the project
- 📄 **[License](LICENSE)** - MIT License terms

## ✨ Features

- 📤 **Drag and Drop Upload** - Simply drag JSON files into the browser
- 🎨 **Syntax Highlighting** - Color-coded JSON for easy reading
- 📁 **File Management** - View and manage uploaded JSON files
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🔧 **Local Processing** - Files processed in your browser for privacy
- ⚡ **Instant Formatting** - Format, collapse, and expand JSON structures
- 🚫 **No Installation** - Works directly in your browser
- 🔒 **Privacy First** - All processing happens locally

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Python Flask (optional)
- **Deployment**: GitLab Pages
- **Styling**: Custom CSS with modern design
- **CI/CD**: GitLab CI/CD Pipeline

# Clone the repository
```
git clone https://gitlab.mn.tu-dresden.de/mebh737h/JSONReader.git
cd JSONReader
```

## 🧪 Local Development Options

### Option 1: Run with Node.js (Recommended)
```
run-node.sh
```

This uses a smart Express server that finds an open port automatically (default: 8080–8100).

Option 2: Run with Docker
```
docker build -t json-viewer-local .
docker run -d -p 8080:80 json-viewer-local
```

Option 3: Deploy to Kubernetes

```
kubectl apply -f k8s-deployment.yaml
kubectl apply -f k8s-service.yaml
minikube service json-viewer-service
```

📝 Project Structure (New Section)
```
- `index.html`, `script.js`, `*.css` — Main frontend
- `server.js` — Smart Node.js Express server
- `run-node.sh` — Helper to start the app locally
- `Dockerfile` — Lightweight static site container
- `k8s-deployment.yaml` — K8s deployment for Minikube
```

# Open in browser
open ```index.html```
