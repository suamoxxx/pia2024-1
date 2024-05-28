//Importamos la conexion a la DB y los modelos, se hace uso de un ODM llamado monogose
const Task = require('./models/task.js');
const Note = require('./models/note.js');
const express = require('express');
const router = express.Router();
//Api rest de tareas
router.get('/', async (req, res) => { 
    const task = await Task.find();
     res.json(task);
})
router.post('/', async (req,res)=>{
    const {priority, description} = req.body;
    const taskAddDB = new Task ({priority, description})
    await taskAddDB.save();
    res.json('Almacenado en la DB tareas');
});
router.put('/:id', async (req,res)=> {
      const { description,priority } = req.body;
      const taskUp = { description,priority}
      //Le pasamos ID y los parametros que se desea actualizar  
      await Task.findByIdAndUpdate(req.params.id, taskUp);     
      res.json({status: 'Tarea actualizada'});
});
router.delete('/:id', async (req,res)=> {
    await Task.findByIdAndDelete(req.params.id)
    res.json({status: 'Eliminado de la DB de notas'});
});
router.get('/search/:id', async (req, res)=>{
    const taskSearch =  await Task.findById(req.params.id);
    res.json(taskSearch);
});
//Api rest de notas
router.get('/notas', async(req, res)=> {
    const note = await Note.find();
    res.json(note);
});
router.post('/notas', async (req,res)=>{
    const {noteId,description} = req.body;
    const noteAddDB = new Note ({noteId,description})
    await noteAddDB.save();
    res.json({status: 'Almacenado en la DB de notas'});
});
router.delete('/notas/:id', async (req,res)=> {
    await Note.findByIdAndDelete(req.params.id)
    res.json({status: 'Eliminado de la DB de notas'});
});
module.exports = router;