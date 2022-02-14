import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component, ...rest }){
	const user = localStorage.getItem('uppedidos:userData')

	if(!user){
	    return <Redirect to="/login" />
	}

	return <Route {...rest} component={component} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
	component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}