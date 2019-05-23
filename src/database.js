const mongoose = require('mongoose');
//console.log(process.env.MONGODB_URI); to hidden my local db 
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
.then(db => console.log('Db is connected'))
.catch( err => console.error(err));
// // ist to way local machine if you upload at repository change it
// //  go at .env file