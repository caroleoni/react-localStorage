

export const TaskRow = ({t, toggleTask}) => {
  return (
        <tr>
            <td className="d-flex justify-content-between">
                {t.name}
                    <input 
                        type="checkbox" 
                        checked={t.done}
                        onChange={() => toggleTask(t)} //para cambiar el done de true a false, tengo que leerlo, buscarlo y actualizarlo 
                    /> 
            </td>
        </tr>
  )
}
