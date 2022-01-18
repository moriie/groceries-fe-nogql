import React from 'react'
import { Route, Routes } from 'react-router-dom'

//components
import Basket from './components/Basket'
import NewListForm from './components/NewListForm'
import Navbar from './components/Navbar'

const AuthRoutes = () => {

    return <div>
        <Navbar />
        <Routes>
            <Route exact path="/home" element={<Basket/>} />
            <Route exact path="/add_new_list" element={<NewListForm/>} />
        </Routes>
    </div>
}

export default AuthRoutes