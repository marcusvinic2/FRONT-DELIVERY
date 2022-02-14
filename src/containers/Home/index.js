import React from 'react'
import { Container, HomeImg } from './styles'
import HomeLogo from '../../assets/banner.png'
import CategoryCarousel from '../../components/CategoryCarousel'

function Home(){
	return (
		<Container>
			<HomeImg src={HomeLogo} alt="baner" />
			<CategoryCarousel />
		</Container>
	)
}

export default Home