const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017/task_db";
mongoose.connect(uri).then(db => console.log('established connection'))
.catch(err=>console.log(`Refused connection ${err}`));
module.exports = mongoose;

