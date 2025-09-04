import React, { useState, useRef, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import useTasks from './customHook/useTasks'

const AddTask = () => {

    const { addTask } = useTasks()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let newTaskToAdd = { "title": nameTask, "description": refTextArea.current.value, "status": refSelect.current.value }
        try {
            await addTask(newTaskToAdd);
            alert("Task creata con successo");
            setNameTask("");
            refTextArea.current.value = "";
        } catch (error) {
            alert(error.message);
        }

    }


    const [nameTask, setNameTask] = useState("");


    const isUsernameNotValid = useMemo(() => {
        const symbols = "!@#$%^&*()-_=+[]{}|;:'\"\,.<>?/`~";
        const valid = [...nameTask].some((n) =>
            symbols.toLocaleLowerCase().includes(n.toLocaleLowerCase())
        )
        return valid || !nameTask.trim()
    }, [nameTask])


    const refTextArea = useRef()
    const refSelect = useRef()


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
            <form onSubmit={handleSubmit} action="">

                <label htmlFor="nomeTask">Nome della task: </label>
                <input type="text" placeholder='scrivi qui' id='nomeTask' value={nameTask} onChange={(e) => setNameTask(e.target.value)} />

                <p style={{ color: isUsernameNotValid ? "red" : "green" }} >{isUsernameNotValid ? "Nome non valido" : "Valido"}</p>

                <label htmlFor="descriz">Descrizione: </label>
                <textarea ref={refTextArea} id='descriz' ></textarea>

                <br />
                <br />

                <label htmlFor="status">Stato: </label>
                <select ref={refSelect} id="status">
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>

                <hr />

                <button type='submit'>Aggiungi Task</button>
            </form>
        </>
    )
}

export default AddTask
