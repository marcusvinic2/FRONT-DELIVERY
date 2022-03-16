import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import { useCart } from '../../hooks/CartContext'
import { useHistory } from 'react-router-dom'

import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'
import Offers from '../../assets/OFERTAS.png'
import Caurosel from 'react-elastic-carousel'
import formatCurrency from '../../utils/FormatCurrency'

export function OffersCarousel(){
	const [offers, setOffers] = useState([])
	const { putProductInCart } = useCart()
	const { push } = useHistory()

	useEffect(() => {
		async function loadOffers(){
			const { data } = await api.get('products')

			const onlyOffers = data.filter( product => product.Offer).map( product => {
				return {...product, formatedPrice: formatCurrency(product.price)}
			})

			setOffers(onlyOffers)
		}
		loadOffers()
	}, [])

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 400, itemsToShow: 2 },
		{ width: 600, itemsToShow: 3 },
		{ width: 900, itemsToShow: 4 },
		{ width: 1300, itemsToShow: 5 }
	]

	return (
		<Container>
			<CategoryImg src={Offers} alt="imagem ofertas" />

			<Caurosel itemsToShow={4} style={{ width: '90%' }} breakPoints={breakPoints}>
				{
					offers && offers.map( product => (
						<ContainerItems key={product.id}>
							<Image src={product.url} alt="produtos em ofertas" />
							<p>{product.name}</p>
							<p>{product.formatedPrice}</p>
							<Button onClick={() => {
								push('/carrinho')
								putProductInCart(product)
							}}>Peça agora</Button>
						</ContainerItems>
					))
				}
			</Caurosel>

		</Container>
	)
}