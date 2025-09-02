import { createContext, useContext, useEffect, useState } from "react";
import useTasks from "../components/customHook/useTasks";

const FetchContext = createContext();

const FetchProvider = ({ children }) => {

    const { tasks, setTasks, addTask, removeTask, updateTask } = useTasks()

    return (
        <FetchContext.Provider value={{ tasks, setTasks, addTask, removeTask, updateTask }}>
            {children}
        </FetchContext.Provider>
    )
}

const useFetchContext = () => {
    const context = useContext(FetchContext)
    return context
}

export { FetchProvider, useFetchContext }