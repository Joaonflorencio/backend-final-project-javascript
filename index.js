require('dotenv').config();
const express = require('express');
const connectDB = require('./config/config');
const productRoutes = require('./routes/products');

const app = express();
app.use(express.json()); // Middleware to parse JSON

connectDB(); // Connect to MongoDB

app.use('/api/products', productRoutes); // Product Routes

app.get('/', (req, res) => {
    res.send('Welcome to the API! Visit <a href="http://localhost:' + process.env.PORT + '/api/products">http://localhost:' + process.env.PORT + '/api/products</a> to see the products.');
});

const PORT = process.env.PORT || 3334;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Click to visit: http://localhost:${PORT}`);
});