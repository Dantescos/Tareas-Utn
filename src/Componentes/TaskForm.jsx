import React, {useState} from "react";
import "../hojas-estilo/TaskForm.css"
 function TareaFormulario(props){

const[input,setInput] = useState("");

    const manejarCambio= e =>{
        setInput()

    }
    
    const manejarEnvio = e =>{
        const tareaNueva = {
            id: "3241",
            texto: "hola"
        }

    }

    return(
<form className="tarea-formulario">
<input 
className="tarea-input" 
type="text" placeholder="escribe una tarea"
name="texto"
onChange={manejarCambio}

/>

<button className="boton-tarea">Agregar Tarea</button>
</form>
    );
 }

 export default TareaFormulario; 