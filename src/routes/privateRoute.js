import React from 'react'

import { Route, Redirect } from 'react-router'

const PrivateRoute = props => {
    const isLogged = !!localStorage.getItem('accessToken')
    return isLogged ? <Route {...props}/> : <Redirect to="/hokage"/>;
}

export default PrivateRoute
