import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import { ArticleDetail, Header, Login, Navbar, Register } from './Components'
import AuthService from './service/auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { getItem } from './helpers/persistance-storage'
import ArticleService from './service/article'
import { getArticlesStart, getArticlesSucces } from './slice/article'


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

  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
     const response = await ArticleService.getArticle()
     dispatch(getArticlesSucces(response.articles))
    } catch (error) {
       console.log('error');
      

    }
  }
  useEffect(() => {
    const token = getItem('token')
    if (token) {
      getUser()
    }
    getArticles()
  }, [])
  return (
    <>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/article/:slug' element={<ArticleDetail/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
