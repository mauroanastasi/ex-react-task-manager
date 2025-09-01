import React from 'react'
import { NavLink } from 'react-router-dom'

const AddTask = () => {
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
            <div>
                <h1>Aggiungi Task</h1>
            </div>
        </>
    )
}

export default AddTask
