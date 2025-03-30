import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route } from 'react-router'
import {Header , Login , Navbar, Register} from './Components'


function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
    </>
  )
}

export default App
