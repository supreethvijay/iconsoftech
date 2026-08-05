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

  // Handle the /upload endpoint (Functions as a transparent GitHub proxy)
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
        const { filename, imageBase64, githubRepo, githubToken } = payload;
        
        if (!filename || !imageBase64 || !githubRepo || !githubToken) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Missing github integration configuration or file data' }));
          return;
        }

        const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
        const safeFilename = Date.now() + '_' + filename.replace(/[^a-zA-Z0-9.\-_]/g, '');
        
        // Use Node's built-in https module to natively bypass all browser security blocks!
        const https = require('https');
        const ghPath = `/repos/${githubRepo}/contents/images/${safeFilename}`;
        
        const options = {
          hostname: 'api.github.com',
          port: 443,
          path: ghPath,
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${githubToken}`,
            'Content-Type': 'application/json',
            'User-Agent': 'Node-Local-Proxy',
            'Accept': 'application/vnd.github.v3+json'
          }
        };

        const ghReq = https.request(options, (ghRes) => {
          let ghData = '';
          ghRes.on('data', (d) => { ghData += d; });
          ghRes.on('end', () => {
            if (ghRes.statusCode >= 200 && ghRes.statusCode < 300) {
              const result = JSON.parse(ghData);
              console.log(`Success! Proxy pushed image natively to GitHub Repository!`);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, path: result.content.path }));
            } else {
              console.error(`GitHub API Rejected: ${ghData}`);
              res.writeHead(400, { 'Content-Type': 'application/json' });
              const err = JSON.parse(ghData);
              res.end(JSON.stringify({ success: false, error: err.message || 'GitHub Repo or Token invalid' }));
            }
          });
        });

        ghReq.on('error', (error) => {
          console.error(error);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Node pipeline network crash' }));
        });

        // Fire payload natively
        ghReq.write(JSON.stringify({
          message: `Auto-upload: Added hero image for new magazine article`,
          content: base64Data
        }));
        ghReq.end();

      } catch (err) {
        console.error('JSON Parse error:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid proxy payload format' }));
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
