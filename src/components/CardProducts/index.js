import React from 'react'
import PropTypes from 'prop-types'

import { Image, ProductName, ProductPrice } from './styles'
import { Button } from '../Button'
import { useCart } from '../../hooks/CartContext'
import { useHistory } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap';

export function CardProducts({ product }){

	const { putProductInCart } = useCart()
	const { push } = useHistory()

	return (

		<Container>
		  <Row>
		    <Col> 
		    	<Image src={product.url} />

		    	<ProductName>{product.name}</ProductName>
				<ProductPrice>{product.formatedPrice}</ProductPrice>
				<Button onClick={() => {
						push('/carrinho')
						putProductInCart(product)
					}}>Adicionar</Button>
		    </Col>
		  </Row>
		</Container>

		)
}

CardProducts.propTypes = {
	product: PropTypes.object
}