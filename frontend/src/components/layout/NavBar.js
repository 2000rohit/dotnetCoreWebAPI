import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../img/userlogo.png'

const NavBar = () => {
  return (
    <>
      <nav
        className='mb-3 p-3 navbar navbar-expand-lg navbar-dark bg-primary'
        style={{ minHeight: '10vh' }}
      >
        <NavLink className='navbar-brand' exact to='/'>
          <div
            className='img-hold d-flex justify-content-center align-items-center'
            style={{ height: '2rem', width: '2rem' }}
          >
            <img
              src={Logo}
              alt='Logo'
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav d-flex justify-content-between w-100'>
            <li className='nav-item active'>
              <NavLink className='nav-link' exact to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item active'>
              <NavLink
                className='btn p-2 btn-outline-light'
                exact
                to='/addUser'
              >
                Add Users
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
