import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'
import { Header } from '../components'

function PrivateRoute({ component, isAdmin, ...rest }){
	const user = localStorage.getItem('uppedidos:userData')

	if(!user){
	    return <Redirect to="/login" />
	}

	if(!isAdmin && !JSON.parse(user).admin){
		return <Redirect to="/" />
	}

	return (
		<>
			{!isAdmin && <Header />}
			<Route {...rest} component={component} />
		</>
	)
}

export default PrivateRoute

PrivateRoute.propTypes = {
	component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	isAdmin: PropTypes.bool
}