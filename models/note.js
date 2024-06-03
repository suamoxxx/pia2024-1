const  mongoose = require('mongoose');
//Vamos a usar solo el schema de mongoose, para definir los datos
const { Schema } = mongoose;
//Definimos el tipo de dato que se almacenara en la DB
const noteSchema = new Schema ({
    description:{type: String, required: true },
}, { timestamps: true });
//Exportamos el esquema
module.exports = mongoose.model('Note', noteSchema);