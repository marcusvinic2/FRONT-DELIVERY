import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/FormatCurrency'

import { Container, Header, Body, EmpityCart } from './styles'

export function CartItems(){

	const { cartProducts, increaseProducts, decreaseProducts } = useCart()

	return (
		<Container>
			<Header>
				<p></p>
				<p>Items</p>
				<p>Preço</p>
				<p style={{ paddingRight: 57 }}>Quantidade</p>
				<p>Total</p>
			</Header>

			{cartProducts && cartProducts.length > 0 ? (
			 	cartProducts.map( product => (
					<Body key={product.id}>
						<img src={product.url} />
						<p>{product.name}</p>
						<p>{formatCurrency(product.price)}</p>

						<div>
							<button onClick={() => decreaseProducts(product.id)}>-</button>
								<p>{product.quantity}</p>
							<button onClick={() => increaseProducts(product.id)}>+</button>
						</div>

						<p>{formatCurrency(product.quantity * product.price)}</p>
					</Body>
				))
		  	) : (
		  		<EmpityCart>Carrinho vazio</EmpityCart>
		  	)}
			
		</Container>
	)
}