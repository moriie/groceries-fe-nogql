import React from 'react'
import { Route, Routes } from 'react-router-dom'

//components
import Login from './components/Login'
import Signup from './components/Signup'
import AuthRoutes from './authroutes'


const PublicRoutes = () => {
    return <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route path='/' element={<AuthRoutes/>} />
    </Routes>
}

export default PublicRoutes