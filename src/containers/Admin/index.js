import React from 'react'
import { Container } from './styles'
import Orders from './Orders'

export function Admin(){
	return (
		<Container>
			<h1>admin</h1>
			<Orders />
		</Container>
	)
}