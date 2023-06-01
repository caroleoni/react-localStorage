import { useState } from 'react';
import React from 'react'

export const TaskCreator = ({ createNewTask }) => {
    // newTaskName es una variable, y setNewTaskName es una function, para llenar la variable la llamo con la funcion
  const [ newTaskName, setNewTaskName ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); //Nos sirve para que cancele ese comportamiento por defecto del formulario de enviar los datos a un backend, no refresca la pagina
    createNewTask(newTaskName);
    localStorage.setItem('task', newTaskName); //Estoy se guarda en el storage de windows.
    setNewTaskName(' ');//para que se limpie el input, pero para que escuche la funcion hay que llamarlo abajo con un value a la variable
  }

  return (
    // my-> marginy el eje de la y
    <form onSubmit={handleSubmit} className='my-2 row'> 
         <div className='col-9'>
             {/* onChange() es cuando el valor del input empieza a cambiar */}
            <input 
              type="text" 
              placeholder="Enter a new task" 
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              className='form-control'
            /> 
         </div>
         <div className='col-3'>
          <button className='btn btn-primary btn-sm'>Save task</button>
         </div>
      </form>
  )
}
