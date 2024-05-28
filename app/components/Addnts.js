import React, {useState, useEffect} from "react";
import '/app/app.css';
import del from '../images/del.png';
import editar from '../images/editar.png';
import down from "../images/down.png";
import up from "../images/up.png";
    function Addnts(){
        const [description, setDescription] = useState('');
        const [data, setData ] = useState([]);     
        const delNot = (id) => {
            if(confirm("Realmente deseas eliminarla")){
                fetch(`http://127.0.0.1:3001/api/task/notas/${id}` , {
                method: "DELETE",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
          })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        } 
          
        }    
       const update =  useEffect(()=>{
            fetch('http://127.0.0.1:3001/api/task/notas')
            .then(res =>res.json())
            .then(data => {
            // Establecemos valor a nuestro useState 
                setData(data)
            })
        }, [])
        const handleSubmit =(e)=>{
            e.preventDefault();
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
        }    
        return (
            <div>
                <a id="clip4" href="#clip"><img id="up" src={up}/></a>  
                <div>
                    <form onSubmit={handleSubmit} className="formNts">
                       <button className="btn_nts">&#43;</button>
                        <textarea 
                                   id="description" 
                                    name="description"
                                    className="input_style_descriptions" 
                                    placeholder="Descripcion de la nota"
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    required
                                    autoComplete="off">   
                        </textarea>
                 </form>
                </div>

                <div>
                <h1 className="tareastxt">Notas</h1>
                                            {
                                   data.map(nts =>{                         
                                    return(
                                        <div id="nts" key={nts._id}>
                                            <ul >
                                                <li>{nts.description}</li>
                                                <li><button className="btn-del" onClick={()=>delNot(nts._id)}><img id="img-task" src={del}/></button> </li>
                                                <li><button className="btn-edit"><img id="img-task2" src={editar}/></button></li>
                                            </ul>

                                        </div>
                                    )})
                                   }             
                </div>
            </div>
        );
    }
export default Addnts;
