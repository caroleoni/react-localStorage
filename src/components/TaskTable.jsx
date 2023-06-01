import React from 'react'
import { TaskRow } from './TaskRow'

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

    const taskTableRow = (doneValue) => {
        console.log(doneValue);
        return(
            tasks
            .filter(t => t.done === doneValue)
            .map(t => (
                <TaskRow t={t} key={t.name}  toggleTask={toggleTask}/>
            ))
        )
    }
    
  return (
    <table className='table table-dark table-striped table-bordered border-secondary'>
        <thead>
          <tr className='table-primary'>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {
            taskTableRow(showCompleted)
          }
        </tbody>
      </table>
  )
}
