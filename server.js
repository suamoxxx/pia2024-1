//Importamos paquetes y demas modulos  ECMAScript 2015 o ES6
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
//Importamos la conexion a la DB
const { mongoose } = require('./database.js');
const Task = require('./models/task.js');
const Note = require('./models/note.js');
const cors = require('cors');
const corsOptions = {
    origin: 'http://127.0.0.1:3001',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
//Establecemos el puerto 3001 a traves de set
app.set('port', process.env.PORT || 3001)
//Ver peticiones de la app con el modulo morgan
app.use(morgan('dev'));
//Para usar formato JSON con express
app.use(express.json());
//Archivo estatico
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/task',require('./routes.js'))
 //Imprime estado del servidor, obteniedo el valor con get
app.listen(app.get('port'), ()=>{
         console.log(`Server running on port ${app.get('port')}`);
});

