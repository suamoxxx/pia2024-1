import React, {useState, useEffect} from "react";
import '/app/app.css';
    function BtnaddNts(){
        const [description, setDescriptions ] = useState('');
        const [note, setNote ] = useState([]);
        const handleSubmit =(e)=>{
            e.preventDefault();
            useEffect(()=>{
                fetch('http://127.0.0.1:3001/tareas')
                .then(res =>res.json())
                .then(data => {
                    console.log(data)
                })
            }, [])
            const notes = {
                description: description
            } 
            //Enviamos datos a la api rest para que los guarde
            fetch('http://localhost:3001/notas', {
                method: 'POST',
                headers: { "Content-type": "application/json", "Accept": "applications/json"},
                body: JSON.stringify(notes)
            })
            //Limpiamos los datos de los inputs de prioridad y description
            setDescriptions('');

        }    
        return (
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                       <button className="btn_nts">&#43;</button>
                        <textarea 
                                   id="description" 
                                    name="description"
                                    className="input_style_description" 
                                    placeholder="Descripcion de la tarea"
                                    value={description} 
                                    onChange={(e) => setDescriptions(e.target.value)} >   
                        </textarea>
                 </form>
                </div>

                <div>
                <table>
                            <thead>
                                <tr>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                   {
                                    note.map(nte =>{                         
                                         return(
                                            <tr key={nte._id}>
                                                <td>{nte.description}</td>
                                            </tr>
                                         )
                                    })
                                   }
                            </tbody>
                        </table>
                </div>
            </div>
        );
    }
export default BtnaddNts;
