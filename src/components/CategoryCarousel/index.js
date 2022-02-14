import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { Container, CategoryImg } from './styles'
import Category from '../../assets/CATEGORIAS.png'
import Caurosel from 'react-elastic-carousel'

function CategoryCarousel(){
	const [categories, setCategories] = useState([])

	useEffect(() => {
		async function loadCategories(){
			const { data } = await api.get('categories')
			setCategories(data)
		}

		loadCategories()
		
	}, [])

	return (
		<Container>
			<CategoryImg src={Category} alt="imagem categorias" />

			<Caurosel itemsToShow={3}>
				{
					categories && categories.map( category => (
						<div key={category.id}>
							<img src={category.url} alt="categorias" />
							<button>{category.name}</button>
						</div>
					))
				}
			</Caurosel>

		</Container>
	)
}

export default CategoryCarousel