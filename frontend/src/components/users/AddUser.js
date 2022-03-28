import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Logo from '../../img/userlogo.png'

const AddUser = () => {
  let history = useHistory()
  const [user, setuser] = useState({
    UserFirstName: '',
    UserLastName: '',
    UserEmail: '',
    UserAddress: '',
    UserPhone: '',
  })
  const { UserFirstName, UserLastName, UserEmail, UserAddress, UserPhone } =
    user
  const onChange = (e) => {
    // console.log(e.target.value)
    setuser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:48759/api/users', user)
    history.push('/')
  }
  // const onChange = (e) => {
  //   console.log(e.target.value)
  // }
  return (
    <>
      <div
        className='container d-flex justify-content-center align-items-center'
        style={{ minHeight: '79.8vh' }}
      >
        <div
          className='mt-2 p-4 bg-dark d-flex flex-column justify-content-center align-items-center'
          style={{
            minHeight: '30rem',
            width: '40rem',
            position: 'relative',
            borderRadius: '1rem',
          }}
        >
          <div
            className='img-hold d-flex justify-content-center align-items-center'
            style={{
              height: '5rem',
              width: '5rem',
              position: 'absolute',
              top: '-8%',
              backgroundColor: 'orange',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <img
              src={Logo}
              alt='Logo'
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <form
            className='mt-5 d-flex flex-column justify-content-between w-100'
            style={{ minHeight: '25rem', maxWidth: '40rem', minWidth: '24rem' }}
            onSubmit={(e) => onSubmit(e)}
          >
            <div className='form-group d-flex justify-content-round align-items-center'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter First Name'
                name='UserFirstName'
                style={{ marginRight: '1rem' }}
                value={UserFirstName}
                onChange={(e) => onChange(e)}
              />
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Last Name'
                name='UserLastName'
                value={UserLastName}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='UserEmail'
                className='form-control form-control-lg'
                placeholder='Enter Email'
                name='UserEmail'
                value={UserEmail}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group'>
              <textarea
                rows='4'
                cols='50'
                className='form-control form-control-lg'
                placeholder='Enter Address'
                name='UserAddress'
                value={UserAddress}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group'>
              <input
                type='tel'
                className='form-control form-control-lg'
                name='UserPhone'
                value={UserPhone}
                onChange={(e) => onChange(e)}
                placeholder='Enter Phone number'
                pattern='[0-9]{10}'
              />
            </div>

            <button type='submit' className='btn btn-lg btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddUser
