import React from 'react'
import { Link } from 'react-router-dom'



const TaskRow = React.memo(({ title, status, createdAt, id }) => {

    return (
        <tr>
            <td><Link to={`/tasks/${id}`}>{title}</Link></td>
            <td style={{
                color: status === "To do" ? "red" :
                    status === "Doing" ? "yellow" :
                        status === "Done" ? "green" : "black"
            }} >{status}</td>
            <td>{createdAt}</td>
        </tr>
    )
}
)

export default TaskRow