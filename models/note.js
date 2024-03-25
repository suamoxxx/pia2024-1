const  mongo = require('mongoose');
//Vamos a usar solo el schema de mongoose, para definir los datos
const { Schema } = mongo;
//Definimos el tipo de dato que se almacenara en la DB
const noteSchema = new Schema ({
    noteId: { type: Number, requerired: true },
    description:{type: String, requerired: true },
}, { timestamps: true });
//Exportamos el esquema
module.exports = mongo.model('Note', noteSchema);