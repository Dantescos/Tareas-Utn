import React from "react";
import "../hojas-estilo/TaskList.css"
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from 'sweetalert2'



function Tarea ({id,completarTarea,eliminarTarea, texto, completada }){
    const completarYAlertar = () => {
        completarTarea(id);
        Swal.fire({
            title: '¡Tarea completada!',
            text: "has completado una tarea",
            icon: 'success',
            confirmButtonText: 'Entendido'
        })
    }

    const eliminarYAlertar = () => {
        eliminarTarea(id);
        Swal.fire({
            title: '¡Tarea eliminada!',
            text: "La tarea ha sido eliminada",
            icon: 'warning',
            confirmButtonText: 'Entendido'
        })
    }

    return (
        <div className={completada ? "tareas-listados completada" : "tareas-listados" }>
        <div className="tareas-elementos" onClick={()=> completarYAlertar()}>
            {texto}
            </div>
            <div className="icono-area" 
            onClick={() => eliminarYAlertar()}> 
             <AiFillCloseCircle/>
             </div>
             </div>
    )
}

export default Tarea;