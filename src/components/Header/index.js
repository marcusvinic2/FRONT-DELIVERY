import React from 'react'
import { useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'

import { Container, ContainerLeft, PageLink, PageLinkExit, ContainerRigth, ContainerText, Line } from './styles'
import UserImg from '../../assets/user.png'
import CartImg from '../../assets/cart.png'

export function Header(){

	const { logout } = useUser()
	const { push, location: {pathname} } = useHistory()

	const logoutUser = () => {
		logout()
		push('/login')
	}

	return (
		<Container>
			<ContainerLeft>
				<PageLink onClick={() => push('/')} isActive={pathname === '/'}>Home</PageLink>
				<PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}>Ver Produtos</PageLink>
			</ContainerLeft>

			<ContainerRigth>
				<PageLink onClick={() => push('/carrinho')}>
					<img src={CartImg} alt="carrinho" />
				</PageLink>
				
				<Line></Line>
				<PageLink>
					<img src={UserImg} alt="Perfil" />
				</PageLink>

				<ContainerText>
					<p>Olá, Marcus</p>
					<PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
				</ContainerText>
			</ContainerRigth>
		</Container>
	)
}