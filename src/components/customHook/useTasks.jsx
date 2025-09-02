import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

const useTasks = () => {

    const [tasks, setTasks] = useState([]);

    const apiUrl = import.meta.env.VITE_API_URL

    useEffect(() => {
        const getTask = () => {
            axios.get(`${apiUrl}/tasks`)
                .then((resp) => {
                    setTasks(resp.data)
                })
                .catch((err) => console.log(err))
        }
        getTask()
    }, [])


    const addTask = () => {

    }
    const removeTask = () => {

    }
    const updateTask = () => {

    }

    return { tasks, setTasks, addTask, removeTask, updateTask }

}

export default useTasks
