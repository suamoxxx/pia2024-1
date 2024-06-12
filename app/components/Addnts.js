import React, { useState, useEffect } from "react";
import '/app/app.css';
import del from '../images/del.png';
import editar from '../images/editar.png';
import up from "../images/up.png";

function Addnts() {
    const [description, setDescription] = useState('');
    const [data, setData] = useState([]);

    const delNot = (id) => {
        if (confirm("Realmente deseas eliminarla")) {
            fetch(`http://127.0.0.1:3001/api/task/notas/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
            })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        } 
        window.location.reload(true);
    };
    const upTask = (id) => {
        fetch(`/api/task/search/${id}/`)
        .then(res => res.json())
        .then(data => {
            setData(data);

            let inpDes = document.getElementById('description');
            let descripcion = data.description;
            inpDes.value = descripcion;
        });
    };

    useEffect(() => {
        fetch('http://127.0.0.1:3001/api/task/notas')
        .then(res => res.json())
        .then(data => {
            setData(data);
        });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const descripcions = {
            description: description
        };
        // Enviamos datos a la API REST para que los guarde
        fetch('/api/task/notas', {
            method: 'POST',
            headers: { "Content-type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(descripcions)
        });
        document.getElementById('output').classList.add('show');
        setDescription('');
        
        setTimeout(function(){
            window.location.reload(true)
        }, 3000);
    };

    return (
        <div  className="container-nts">
            <a id="clip4" href="#clip"><img id="up-nts" src={up} /></a>  
            <div>
                <p className="text-nts">Ingresa tus notas</p>
                <form onSubmit={handleSubmit} className="formNts">
                    <button className="btn_nts">&#43;</button>
                    <textarea
                        id="description"
                        name="description"
                        className="input_descriptions"
                        placeholder="Descripcion de la nota"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        autoComplete="off">
                    </textarea>
                </form>
            </div>

            <div>
                <h1 className="tareastxt"> Tus Notas</h1>
                {
                    data.map(nts => {
                        return (
                            <div id="nts" key={nts._id}>
                                <ul>
                                    <li>{nts.description}</li>
                                    <li><button className="btn-del" onClick={() => delNot(nts._id)}><img id="img-task" src={del} /></button></li>
                                    <li><button className="btn-edit"><img id="img-task2" src={editar} /></button></li>
                                </ul>
                            </div>
                        );
                    })
                }
            </div>
            <span id="output" className="output">Guardado</span>
        </div>
    );
}

export default Addnts;
