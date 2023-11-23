import React from "react";
import "../hojas-estilo/TaskList.css"
import { AiFillCloseCircle } from "react-icons/ai";

function Tarea({texto, completada }){
return (
    <div className={completada ? "tareas-listados completada" : "tareas-listados" }>
    <div className="tareas-elementos">
        {texto}
        </div>
        <div className="icono-area"> 
         <AiFillCloseCircle className="icono" />
    </div>
    </div>
);
}
export default Tarea;