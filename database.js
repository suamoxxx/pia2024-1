const mongo = require('mongoose');

/*
mongo.connect(uri).then(db => console.log('conexion establecida'))
.catch(err=>console.log(`No se establecio la conexion ${err}`));

**/

try {
const uri = "mongodb://127.0.0.1:27017/task_db";
mongo.connect(uri)
console.log('established connection')
} catch (error){
    if (error.readyStage === 0 ){
        console.log(`Connection refused ${error}`)
    }
}

module.exports = mongo;

