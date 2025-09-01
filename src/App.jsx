import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import { FetchProvider } from './contexts/ContextApi'



function App() {


  return (
    <>
      <FetchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={TaskList} ></Route>
            <Route path='/add' Component={AddTask} ></Route>
          </Routes>
        </BrowserRouter>
      </FetchProvider>

    </>
  )
}

export default App
