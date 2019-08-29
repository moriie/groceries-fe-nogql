import React from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import Login from './components/Login'
import Basket from './components/Basket'


const Routes = () => {
    return <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Basket} />
    </Switch>
}

export default Routes