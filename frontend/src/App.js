import './App.css'

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layout/NavBar'
import Home from './components/pages/Home'
import NotPage from './components/pages/NotPage'
import AddUser from './components/users/AddUser'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <div
          className='bg-secondary w-100'
          style={{ height: '100vh', minWidth: '45rem' }}
        >
          <video
            src='https://webstatic.mihoyo.com/upload/op-public/2020/09/25/c83e1d727f16a10a35adfbb840746a34_3862078340648314834.mp4'
            muted='muted'
            loop='loop'
            autoPlay='autoplay'
            poster='https://uploadstatic-sea.mihoyo.com/contentweb/20200918/2020091816411789749.jpg'
            className='bg-video h-100 w-100 img-fluid'
            style={{ objectFit: 'cover' }}
          ></video>
          <div
            className='position-absolute h-100 w-100'
            style={{
              minWidth: '28rem',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
            }}
          >
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/addUser' component={AddUser}></Route>
              <Route exact component={NotPage}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
