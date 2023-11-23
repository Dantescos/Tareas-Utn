import React from "react";
import "../hojas-estilo/TaskList.css"
import { AiFillCloseCircle } from "react-icons/ai";

function Tarea ({id,completarTarea,eliminarTarea, texto, completada }){
return (
    <div className={completada ? "tareas-listados completada" : "tareas-listados" }>
    <div className="tareas-elementos" onClick={()=> completarTarea(id)}>
        
        {texto}
        </div>
        <div className="icono-area" 
        onClick={() => eliminarTarea(id)}> 
         <AiFillCloseCircle className="icono" />
    </div>
    </div>
);
}
export default Tarea;