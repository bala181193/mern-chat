const mongoose = require('mongoose');

const mongoDBURL = 'mongodb://localhost/chatApplication';

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Additional code or logic here
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

