import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TaskDetail = () => {

    const { id } = useParams()

    const apiUrl = import.meta.env.VITE_API_URL

    const [detail, setDetail] = useState([])

    const detailsApi = (i) => {
        axios.get(`${apiUrl}/tasks/${i}`)
            .then(res => setDetail(res.data))
    }

    useEffect(() => {
        detailsApi(id)
    }, [id])


    return (
        <>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
            <p>{detail.status}</p>
            <p>{detail.createdAt}</p>
        </>
    )
}

export default TaskDetail
