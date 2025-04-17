import React from 'react'
import { Link } from 'react-router'
import { logo } from '../constants'

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row pt-4 align-items-center pb-3 mb-4 border-bottom container">
     <Link to={'/'}>
      <div className='w-[90%] '>
      <img src={logo} width={150}  alt="" />
      </div>
     </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
       <Link to={'/login'} className='me-3 py-2 link-body-emphasis text-decoration-none' >
       Login
       </Link>
       <Link to={'/register'} className='me-3 py-2 link-body-emphasis text-decoration-none' >
       Register
       </Link>
      </nav>
    </div>
  )
}

export default Navbar