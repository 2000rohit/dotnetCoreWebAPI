import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [users, setuser] = useState([])
  useEffect(() => {
    load()
  }, [])
  const load = async () => {
    const users = await axios.get('http://localhost:48759/api/users')
    setuser(users.data)
  }
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:48759/api/users/${id}`)
    load()
  }

  return (
    <>
      <div
        className='m-5 d-flex justify-content-center'
        style={{ minWidth: '40rem' }}
      >
        <table
          className='table bg-light text-center'
          style={{ tableLayout: 'fixed', width: '100%' }}
        >
          <thead className='thead bg-dark text-light'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Fullname</th>
              <th scope='col'>Email</th>
              <th style={{ wordWrap: 'break-word' }} scope='col'>
                Address
              </th>
              <th scope='col'>Phone</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>
                  {user.UserFirstName} {user.UserLastName}
                </td>
                <td>{user.UserEmail}</td>
                <td style={{ wordWrap: 'break-word' }}>{user.UserAddress}</td>
                <td>{user.UserPhone}</td>

                <td>
                  <Link
                    className='px-3 btn bg-danger'
                    onClick={() => deleteUser(user.UserId)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home
