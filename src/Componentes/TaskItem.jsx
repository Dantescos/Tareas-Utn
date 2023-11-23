import React, {useState} from "react";
import TareaFormulario from "./TaskForm"
import "../hojas-estilo/TaskItem.css"
import Tarea from "./TaskList";

function ListaDeTareas() {

const[tareas,setTareas]=useState([]);

const agregarTarea= tarea => {
    console.log("tarea agragada");
    console.log(tarea);

}
    return(
        <> 
        <TareaFormulario />
        <div className="tareas-lista-contenedor">
                {
                    tareas.map((tareas)=>
                    <Tarea 
                    texto={tareas.texto}
                    completada={tareas.completada}
                    />
                    )
                }
        </div>
        </>
    );
}

export default ListaDeTareas;