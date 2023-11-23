import './App.css';
import React  from 'react';
import ListaDeTareas from "./Componentes/TaskItem"



function App() {
  return (
    <div className="App">




    <div className='tareas-listado'>
      <h1 className='titulo'> Mis tareas </h1>
      <ListaDeTareas />
        
    </div>  
    </div>
    
  );
}

export default App;
