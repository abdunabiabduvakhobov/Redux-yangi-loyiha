import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route } from 'react-router'
import {Header , Login , Navbar, Register} from './Components'
import AuthService from './service/auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { getItem } from './helpers/persistance-storage'


function App() {

  const dispatch = useDispatch()
 const getUser = async () => {
  try {
    const responese = await AuthService.getUser()
    dispatch(signUserSuccess(responese.user))
  } catch (error) {
    console.log('error');
    
  }
 }
  useEffect(()=>{
    const token = getItem('token')
    if(token){
      getUser()
    }
   
  },[])
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
