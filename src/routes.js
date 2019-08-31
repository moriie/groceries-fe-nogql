import React from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import Login from './components/Login'
import AuthRoutes from './authroutes'


const Routes = () => {
    return <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/' component={AuthRoutes} />
    </Switch>
}

export default Routes