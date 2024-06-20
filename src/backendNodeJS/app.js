// node app.js

const express = require('express');
const app = express();

// Step 4: Define a route that corresponds to the sample method
app.get('/sample', (req, res) => {
    res.json({ message: 'This is a sample method' });
    console.log('Method called!');
});

// Step 5: Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});