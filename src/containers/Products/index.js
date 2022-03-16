import React, { useEffect, useState } from 'react'
import { Container, HomeImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'
import HomeLogo from '../../assets/banner.png'
import api from '../../services/api'
import { CardProducts } from '../../components'
import formatCurrency from '../../utils/FormatCurrency'
import PropTypes from 'prop-types'

export function Products({location: {state}}){

	let categoryId = 0
	if(state?.categoryId){
		categoryId = state.categoryId
	}
	
	const [categories, setCategories] = useState([])
	const [products, setProducts] = useState([])
	const [filteredProducts, setFilteredProducts] = useState([])
	const [activeCategory, setActiveCategory] = useState(categoryId)

	useEffect(() => {
		async function loadCategories(){
			const { data } = await api.get('categories')
			const newCategories = [{ id: 0, name: 'Todas' }, ...data]
			setCategories(newCategories)
		}

		async function loadProducts(){
			const { data: allProducts } = await api.get('products')

			const newProducts = allProducts.map( product => {
				return {...product, formatedPrice: formatCurrency(product.price)}
			})

			setProducts(newProducts)
		}

		loadProducts()
		loadCategories()
	}, [])

	useEffect(() => {
		if(activeCategory === 0){
			setFilteredProducts(products)
		}else{
		const newFilteredProducts = products.filter(
			product => product.categoryId === activeCategory
			)

		setFilteredProducts(newFilteredProducts)
		}
	}, [activeCategory, products])

	return (
		<Container>
			<HomeImg src={HomeLogo} alt="baner" />

		<CategoriesMenu>
			{ categories && categories.map( category => (
				<CategoryButton type="button" key={category.id}
					isActiveCategory={activeCategory === category.id}
					onClick={() => {
					setActiveCategory(category.id)
				}}>{category.name}</CategoryButton>
			))}
		</CategoriesMenu>

		<ProductsContainer>

			{ filteredProducts && filteredProducts.map(product => (
				<CardProducts key={product.id} product={product} />
			)) }
			
		</ProductsContainer>

		</Container>
	)
}

Products.propTypes = {
	location: PropTypes.object
}