#!/bin/bash

PORT=8081  # Or any free port

echo "📦 Installing Node.js dependencies..."
npm install

echo "🚀 Starting server at http://localhost:$PORT"
PORT=$PORT npm start
