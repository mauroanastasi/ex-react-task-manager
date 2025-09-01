import React from 'react'

const TaskRow = React.memo(({ title, status, createdAt }) => {
    return (
        <tr>
            <td>{title}</td>
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