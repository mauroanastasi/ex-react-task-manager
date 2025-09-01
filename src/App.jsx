import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={TaskList} ></Route>
          <Route path='/add' Component={AddTask} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
