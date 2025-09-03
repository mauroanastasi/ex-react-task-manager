import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFetchContext } from '../contexts/ContextApi'
import TaskRow from './TaskRow';

const TaskList = () => {

    const { tasks } = useFetchContext();

    return (
        <>
            <header>
                <ul>
                    <li>
                        <NavLink to="/">TaskList</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add">AddTask</NavLink>
                    </li>
                </ul>
            </header>
            <h1>Lista Task</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Stato</th>
                        <th>Data di Creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((t, id) => (
                        <TaskRow key={id} id={t.id} title={t.title} status={t.status} createdAt={t.createdAt} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TaskList
