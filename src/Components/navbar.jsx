import React from 'react'
import { Link, useNavigate } from 'react-router'
import { logo } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../helpers/persistance-storage'
import { logoutUser } from '../slice/auth'

const Navbar = () => {

  const {loggedIn, user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const logoutHandler = () =>{
  removeItem('token')
  dispatch(logoutUser())
  navigate('/login')
  }
  return (
    <div className="d-flex flex-column flex-md-row pt-4 align-items-center pb-3 mb-4 border-bottom container">
      <Link to={'/'}>
        <div className='w-[90%] '>
          <img src={logo} width={150} alt="" />
        </div>
      </Link>
      <nav className="d-inline-flex mt-2  mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className='me-3 py-2 m-0 link-body-emphasis text-[24px]  text-decoration-none'>{user.username}</p>
            <Link to={'/create-article'} className='me-3 text-[24px] py-2 link-body-emphasis text-decoration-none' >
              Create
            </Link>
            <button onClick={logoutHandler} className='px-3 py-0 bg-red-600 rounded hover:bg-amber-200 border-red-600 border-2 '>logout</button>
          </>
        ) : (
          <>
            <Link to={'/login'} className='me-3 py-2 link-body-emphasis text-decoration-none' >
              Login
            </Link>
            <Link to={'/register'} className='me-3 py-2 link-body-emphasis text-decoration-none' >
              Register
            </Link>
          </>

        )}

      </nav>
    </div>
  )
}

export default Navbar