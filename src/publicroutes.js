import React from 'react'
import { Route, Routes } from 'react-router-dom'

//components
import Login from './components/Login'
import Signup from './components/Signup'
import Basket from './components/Basket'
import NewListForm from './components/NewListForm'


const PublicRoutes = () => {
    return <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route path='/'>
            <Route exact path='baskets' element={<Basket/>}/>
            <Route exact path='baskets/create' element={<NewListForm/>}/>
        </Route>
    </Routes>
}

export default PublicRoutes