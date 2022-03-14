import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Login, Register, Home, Products, Cart } from '../containers'

import PrivateRoute from './private-routes'

function Routes(){
	return (
		<Router>
			<Switch>
				<Route component={Login} path="/login" />
				<Route component={Register} path="/cadastro" />
				<Route component={Cart} path="/carrinho" />
				<PrivateRoute exact component={Home} path="/" />
				<PrivateRoute component={Products} path="/produtos" />
			</Switch>
		</Router>
	)
}

export default Routes