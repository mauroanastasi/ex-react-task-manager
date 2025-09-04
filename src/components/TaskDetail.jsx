import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate, Navigate } from 'react-router-dom';
import { useFetchContext } from '../contexts/ContextApi';
import useTasks from './customHook/useTasks';

const TaskDetail = () => {

    const { id } = useParams()

    const { tasks } = useFetchContext();

    const { removeTask } = useTasks()

    const navigate = useNavigate()

    const task = tasks.find((t) => String(t.id) === id);

    const deleteTask = async (id) => {
        try {
            await removeTask(id);
            alert("Task eliminata con successo");
            navigate(`/`);
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.status}</p>
            <p>{task.createdAt}</p>
            <button onClick={() => deleteTask(task.id)} >Elimina Task</button>
        </>
    )
}

export default TaskDetail
