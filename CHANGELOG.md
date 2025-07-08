## [1.1.0] - 2025-07-04

### Added
- Smart Node.js server using Express with dynamic port fallback
- Local run support via `run-node.sh`
- Optional Docker-based deployment with Nginx
- Minikube and Kubernetes manifest files
- Improved documentation and setup scripts

### Changed
- Refactored structure to support multiple deployment modes (Node.js, Docker, K8s)


# Changelog

All notable changes to the JSON File Reader project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Dark mode toggle
- JSON schema validation
- Export functionality (PDF, text)
- File comparison feature
- Keyboard shortcuts

## [1.0.0] - 2025-07-04

### Added
- Initial release of JSON File Reader
- Drag and drop JSON file upload functionality
- JSON syntax highlighting with color coding
- File management system
- Responsive design for all devices
- Local file processing (client-side)
- JSON formatting controls (format, collapse, expand)
- Error handling and user notifications
- GitLab Pages deployment
- Cross-browser compatibility

### Features
- **File Upload**: Drag and drop or click to upload JSON files
- **Syntax Highlighting**: Color-coded JSON for better readability
  - Red: Object keys
  - Blue: String values
  - Green: Numbers
  - Orange: Booleans
  - Purple: Null values
- **File Management**: View list of uploaded files
- **JSON Controls**: Format, collapse, and expand JSON structures
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Local Processing**: Files processed in browser for privacy
- **Error Handling**: Clear error messages for invalid JSON
- **Modern UI**: Clean interface with gradient backgrounds

### Technical Details
- Pure HTML5, CSS3, and JavaScript (ES6+)
- No external dependencies
- Client-side processing for security
- Progressive Web App ready
- Optimized for performance

## [0.1.0] - 2025-07-04

### Added
- Project initialization
- Basic HTML structure
- CSS styling framework
- JavaScript functionality skeleton
- Python Flask backend (optional)
- GitLab CI/CD configuration
- Project documentation

---

## Release Notes

### v1.0.0 Highlights
This is the first stable release of JSON File Reader. The application is fully functional and ready for production use. It provides a complete solution for viewing and managing JSON files through a web interface.

**Key Features:**
- Zero installation required
- Works entirely in the browser
- Privacy-focused (no data uploaded to servers)
- Modern, responsive design
- Cross-platform compatibility

### Browser Support
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Android Chrome)

### Performance
- Fast loading times
- Efficient JSON parsing
- Smooth animations and transitions
- Optimized for large JSON files

---

For more details about each release, visit the [GitLab releases page](https://gitlab.mn.tu-dresden.de/mebh737h/JSONReader/-/releases).
