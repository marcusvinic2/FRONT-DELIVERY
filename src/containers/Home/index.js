import React from 'react'

import { Container, HomeImg } from './styles'
import {CategoryCarousel, OffersCarousel } from '../../components'

import HomeLogo from '../../assets/banner.png'

export function Home(){
	return (
		<Container>
			<HomeImg src={HomeLogo} alt="baner" />
			<CategoryCarousel />
			<OffersCarousel />
		</Container>
	)
}