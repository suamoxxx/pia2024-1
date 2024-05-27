import React, {useState, useEffect} from "react";
import '/app/app.css';
    function Addnts(){
        const [description, setDescription] = useState('');
        const [data, setData ] = useState([]);      
        useEffect(()=>{
            fetch('http://127.0.0.1:3001/api/task/notas')
            .then(res =>res.json())
            .then(data => {
// Establecemos valor a nuestro useState 
                console.log(data)
            })
        }, [])
        const handleSubmit =(e)=>{
            e.preventDefault();
          console.log(description)
          const descripcions = {
            description: description
        }
             //Enviamos datos a la api rest para que los guarde
             fetch('/api/task/notas', {
                method: 'POST',
                headers: { "Content-type": "application/json", "Accept": "applications/json"},
                body: JSON.stringify(descripcions)
            })
                setDescription('')
                getNotes();
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
                                    placeholder="Descripcion de la nota"
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    required>   
                        </textarea>
                 </form>
                </div>

                <div>
                <h1 className="tareastxt">Notas</h1>
                                            {
                                   data.map(nts =>{                         
                                    return(
                                        <p key={nts._id}>{nts.description}</p>
                                    )})
                                   }             
                </div>
            </div>
        );
    }
export default Addnts;
