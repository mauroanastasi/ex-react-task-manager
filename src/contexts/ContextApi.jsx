import { createContext, useContext, useEffect, useState } from "react";

const FetchContext = createContext();

const FetchProvider = ({ children }) => {

    const [task, setTask] = useState([])

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL
        fetch(`${apiUrl}/tasks`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTask(data)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <FetchContext.Provider value={{ task, setTask }}>
            {children}
        </FetchContext.Provider>
    )
}

const useFetchContext = () => {
    const context = useContext(FetchContext)
    return context
}

export { FetchProvider, useFetchContext }