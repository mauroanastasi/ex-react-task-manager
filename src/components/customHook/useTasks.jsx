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


    const addTask = async (task) => {
        try {
            const response = await axios.post(`${apiUrl}/tasks`, task);
            if (response.data.success) {
                setTasks(prev => [...prev, response.data.task]);
            } else {
                throw new Error(response.data.message);
            }
        } catch (err) {
            throw err;
        }
    };



    const removeTask = () => {

    }
    const updateTask = () => {

    }

    return { tasks, setTasks, addTask, removeTask, updateTask }

}

export default useTasks
