import React from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import Login from './components/Login'


const Routes = () => {
    return <Switch>
        <Route exact path='/' component={Login} />
    </Switch>
}

export default Routes