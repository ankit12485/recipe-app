const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoDB1', (err)=> {
    if(!err)
        console.log('DB connected successfully!');
    else
        console.log('Error in DB connection: '+JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;