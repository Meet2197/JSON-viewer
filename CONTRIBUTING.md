# Contributing Guide

Thanks for your interest in contributing to JSONReader!

## How to Contribute

- Fork this project and clone your fork
- Create a new branch (`feature/your-feature-name`)
- Make your changes with clear commit messages
- Test locally using:
  - `bash run-node.sh` for Node.js
  - `docker build -t json-viewer . && docker run -p 8080:80 json-viewer` for Docker
- Push and open a Merge Request
- Follow code style guides

## Guidelines

- Keep UI responsive and accessible
- Write semantic HTML and modular CSS
- Prefer vanilla JS or minimal dependencies
- Follow [Keep a Changelog](https://keepachangelog.com/)
- Use GitLab issues to discuss major features before implementation
