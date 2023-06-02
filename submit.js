//start server node submit.js
//end server ctr c

const http = require('http');
const qs = require('querystring');
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    
    // Collect the data from the request
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    // Process the form submission
    req.on('end', () => {
      const formData = qs.parse(body);
      const name = formData.name;
      const email = formData.email;
      const designIdea = formData.designIdea;

      // Print the form data
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Design Idea:', designIdea);

      // Write the submitted data to a file (optional)
      fs.appendFileSync('submissions.txt', `${name}, ${email}, ${designIdea}\n`);

      // Send a response
      res.writeHead(302, { 'Location': 'home.html?submitted=true' });
      res.end();
    });
  } else {
    // Handle other requests
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});