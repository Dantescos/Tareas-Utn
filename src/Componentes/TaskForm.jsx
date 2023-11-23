import React from "react";
import "../hojas-estilo/TaskForm.css"
 function TareaFormulario(){
    return(
<form className="tarea-formulario">
<input 
className="tarea-input" 
type="text" placeholder="escribe una tarea"
name="texto"/>

<button className="boton-tarea">Agregar Tarea</button>
</form>
    );
 }

 export default TareaFormulario; 