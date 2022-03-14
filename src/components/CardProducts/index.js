import React from 'react'
import PropTypes from 'prop-types'
import { Image, ProductName, ProductPrice } from './styles'
import { Button } from '../Button'
import { useCart } from '../../hooks/CartContext'

import { Container, Row, Col } from 'react-bootstrap';

export function CardProducts({ product }){
	const { putProductInCart } = useCart()
	return (

		<Container>
		  <Row>
		    <Col> 
		    	<Image src={product.url} />

		    	<ProductName>{product.name}</ProductName>
				<ProductPrice>{product.formatedPrice}</ProductPrice>
				<Button onClick={() => putProductInCart(product)}>Adicionar</Button>
		    </Col>
		  </Row>
		</Container>

		)
}

CardProducts.propTypes = {
	product: PropTypes.object
}