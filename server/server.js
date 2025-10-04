const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

  // Middleware
app.use(cors());
app.use(express.json());

 // Routes
app.get('/', (req, res) => {
    res.json({message: 'welcome to Love In Action API'});
});

  // Connect to MongoDB

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/love-in-action', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});