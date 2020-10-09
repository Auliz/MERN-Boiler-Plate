const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

// Basic API Response
app.get('/', [], (req, res) => res.json({ msg: 'Boiler Plate...' }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Set port
const PORT = process.env.PORT || 5000;

// Start port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
