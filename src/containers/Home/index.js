import React from 'react'
import { Container, HomeImg } from './styles'
import HomeLogo from '../../assets/banner.png'
import {CategoryCarousel, OffersCarousel} from '../../components'

export function Home(){
	return (
		<Container>
			<HomeImg src={HomeLogo} alt="baner" />
			<CategoryCarousel />
			<OffersCarousel />
		</Container>
	)
}