import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import { FetchProvider } from './contexts/ContextApi'
import TaskDetail from './components/TaskDetail'



function App() {


  return (
    <>
      <FetchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskList />} ></Route>
            <Route path='/add' element={<AddTask />} ></Route>
            <Route path='/tasks/:id' element={<TaskDetail />} ></Route>
          </Routes>
        </BrowserRouter>
      </FetchProvider>

    </>
  )
}

export default App
