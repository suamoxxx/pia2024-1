//Importamos paquetes y demas modulos  ECMAScript 2015 o ES6
const express = require('express');
const morgan = require('morgan');
//Importamos el admin de las tareas
const TaskManager = require('./TaskManager.js');
const app = express();
const path = require('path');
//Importamos la conexion a la DB
const { mongo } = require('./database.js');
const Task = require('./models/task.js');
const Note = require('./models/note.js');
//Establecemos el puerto 3001 a traves de set
app.set('port', process.env.PORT || 3001)
//Ver peticiones de la app con el modulo morgan
app.use(morgan('dev'));
//Para usar formato JSON con express
app.use(express.json());
/////////////////////Metodos HTTP////////////////////////////
//Api rest de tareas
app.get('/tareas', async(requ, resp)=> {
         const task = await Task.find();
         resp.json(task);
});
app.post('/tareas', async (resq,resp)=>{
        const {descriptions,priority} = resq.body;
        const taskAddDB = new Task ({descriptions,priority})
        console.log(resq.body);
        await taskAddDB.save();
        resp.json('Almacenado en la DB tareas');
});
app.get('tareas/:id', async (resq, resp)=>{
         const taskSearch =  await Task.findById(resq.params.id);
         resp.json(taskSearch);
});
app.put('tareas/:id', async (resq,resp)=> {
          const { taskId,descriptions,dueDate,priority } = resq.body;
          const taskUpdDB = { taskId,descriptions,dueDate,priority}
          await Task.findByIdAndUpdate(resq.params.id, taskUpdDB);
         console.log(resq.params.id)
         resp.json("Actualizada ");
});
app.delete('tareas/:id', async (resq,resp)=> {
        await Task.findByIdAndDelete(resq.params.id)
        resp.json('Eliminado');
});
//Api rest de notas
app.post('/notas', async (resq,resp)=>{
        const {noteId,descriptions} = resq.body;
        const noteAddDB = new Note ({noteId,descriptions})
        console.log(resq.body);
        await noteAddDB.save();
        resp.json('Almacenado en la DB de notas');
});
app.get('/notas', async(requ, resp)=> {
        const note = await Note.find();
        resp.json(note);
});

//Archivo estatico
app.use(express.static(path.join(__dirname, 'public')));
 //Imprime estado del servidor, obteniedo el valor con get
app.listen(app.get('port'), ()=>{
         console.log(`Server running in port ${app.get('port')}`);
});

