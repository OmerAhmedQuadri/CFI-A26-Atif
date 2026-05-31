import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App