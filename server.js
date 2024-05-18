//Importamos paquetes y demas modulos  ECMAScript 2015 o ES6
const express = require('express');
const morgan = require('morgan');
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
//Archivo estatico
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*'); // Replace with your frontend origin
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Optional, adjust allowed headers
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Optional, adjust allowed methods
        next();
      });
//Api rest de tareas
app.get('/tareas', async(requ, resp)=> {
         const task = await Task.find();
         resp.json(task);
});
app.post('/tareas', async (resq,resp)=>{
        const {priority, description} = resq.body;
        const taskAddDB = new Task ({priority, description})
        console.log(resq.body);
        await taskAddDB.save();
        resp.json('Almacenado en la DB tareas');
});
app.get('tareas/:id', async (resq, resp)=>{
         const taskSearch =  await Task.findById(resq.params.id);
         resp.json(taskSearch);
});
app.put('tareas/:id', async (resq,resp)=> {
          const { taskId,description,dueDate,priority } = resq.body;
          const taskUpdDB = { taskId,description,dueDate,priority}
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
        const {noteId,description} = resq.body;
        const noteAddDB = new Note ({noteId,description})
        console.log(resq.body);
        await noteAddDB.save();
        resp.json('Almacenado en la DB de notas');
});
app.get('/notas', async(requ, resp)=> {
        const note = await Note.find();
        resp.json(note);
});
 //Imprime estado del servidor, obteniedo el valor con get
app.listen(app.get('port'), ()=>{
         console.log(`Server running in port ${app.get('port')}`);
});

