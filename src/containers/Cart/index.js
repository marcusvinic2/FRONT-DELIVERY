import React from 'react'
import { Container, CartImg, Wrapper } from './styles'
import { CartItems, CartResume } from '../../components'
import CartLogo from '../../assets/banner.png'

export function Cart(){
	return (
		<Container>
			<CartImg src={CartLogo} alt="baner" />
			<Wrapper>
				<CartItems />
				<CartResume />
			</Wrapper>
		</Container>
	)
}