const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);

    // You can process the form data here (e.g., save to a database)

    // Send a response back to the client
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
