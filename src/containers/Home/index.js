import React from 'react'
import { Container, HomeImg } from './styles'
import HomeLogo from '../../assets/banner.png'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'

function Home(){
	return (
		<Container>
			<HomeImg src={HomeLogo} alt="baner" />
			<CategoryCarousel />
			<OffersCarousel />
		</Container>
	)
}

export default Home