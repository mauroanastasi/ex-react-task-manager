import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetchContext } from '../contexts/ContextApi';

const TaskDetail = () => {

    const { id } = useParams()

    const { tasks } = useFetchContext();

    const task = tasks.find((t) => String(t.id) === id);

    const deleteTask = () => {
        console.log("elimino task")
    }

    return (
        <>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.status}</p>
            <p>{task.createdAt}</p>
            <button onClick={deleteTask} >Elimina Task</button>
        </>
    )
}

export default TaskDetail
