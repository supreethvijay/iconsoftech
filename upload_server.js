const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const IMAGES_DIR = path.join(__dirname, 'images');

// Ensure the images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR);
}

const server = http.createServer((req, res) => {
  // Setup standard CORS headers for local development
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle the /upload endpoint
  if (req.method === 'POST' && req.url === '/upload') {
    let body = '';
    
    // Read the chunked request body
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // When the request is fully received, parse it
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const { filename, imageBase64 } = payload;
        
        if (!filename || !imageBase64) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Missing filename or base64 data' }));
          return;
        }

        // The base64 string usually comes with a prefix like "data:image/jpeg;base64,"
        // We need to strip this off before dumping it into a binary file
        const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
        
        // Clean filename and attach timestamp to prevent caching collisions
        const safeFilename = Date.now() + '_' + filename.replace(/[^a-zA-Z0-9.\-_]/g, '');
        const filePath = path.join(IMAGES_DIR, safeFilename);

        // Write file safely
        fs.writeFile(filePath, base64Data, 'base64', (err) => {
          if (err) {
            console.error('File write error:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: 'Failed to write file' }));
          } else {
            console.log(`Saved new image: ${safeFilename}`);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            // Return relative path for HTML/CSS to resolve securely
            res.end(JSON.stringify({ success: true, path: `images/${safeFilename}` }));
          }
        });

      } catch (err) {
        console.error('JSON Parse error:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
      }
    });
  } else {
    // 404 block for unexpected routes
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`Icons of Tech Local Image Server Running!`);
  console.log(`Listening dynamically on port ${PORT}...`);
  console.log(`Ready to save incoming images to /images!`);
  console.log(`=========================================`);
});
