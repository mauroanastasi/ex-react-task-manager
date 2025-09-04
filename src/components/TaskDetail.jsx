import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate, Navigate } from 'react-router-dom';
import { useFetchContext } from '../contexts/ContextApi';
import useTasks from './customHook/useTasks';
import Modal from './Modal';


const TaskDetail = () => {

    const { id } = useParams()

    const { tasks } = useFetchContext();

    const { removeTask } = useTasks()

    const navigate = useNavigate()

    const task = tasks.find((t) => String(t.id) === id);

    const [show, setShow] = useState(false)



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
            <Modal title={task.title} content={task.description} show={show} onClose={() => setShow(false)} onConfirm={() => deleteTask(task.id)} />
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.status}</p>
            <p>{task.createdAt}</p>
            <button onClick={() => setShow(true)} >Elimina Task</button>

            <div id="modal-root"></div>
        </>
    )
}

export default TaskDetail
