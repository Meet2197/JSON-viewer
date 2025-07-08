
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from current directory
app.use(express.static(__dirname));

// Redirect all unmatched routes to index.html (optional for SPAs)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`🚀 JSON Viewer is running at http://localhost:${port}`);
});
