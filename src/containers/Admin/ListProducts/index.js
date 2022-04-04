import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import { Container, Img, EditIcons } from './styles'
import formatCurrency from '../../../utils/FormatCurrency'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';

function ListProducts(){

	const [products, setProducts] = useState()

	useEffect(() => {
		async function loadOrders(){
			const { data } = await api.get('products')
			
			setProducts(data)
		}

		loadOrders()
	}, [])

	function isOffer(offerStatus){
		if(offerStatus){
			return <CheckBoxIcon style={{ color: '#228B22' }} />
		}
		
		return <CancelIcon style={{ color: '#CC1717' }} />
	}

	return (
		<Container>
			<TableContainer component={Paper}>
		      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
		        <TableHead>
		          <TableRow>
		            <TableCell>Nome</TableCell>
		            <TableCell>Preço</TableCell>
		            <TableCell align="center">Produto em oferta</TableCell>
		            <TableCell align="center">Imagem</TableCell>
		            <TableCell>Editar</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		          {products && products.map((product) => (
		            <TableRow
		              key={product.id}
		              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
		            >
		              <TableCell component="th" scope="product">
		                {product.name}
		              </TableCell>
		              <TableCell>{formatCurrency(product.price)}</TableCell>
		              <TableCell align="center">{isOffer(product.Offer)}</TableCell>
		              <TableCell align="center"><Img src={product.url} alt="produto img" /></TableCell>
		              <TableCell><EditIcons /></TableCell>
		            </TableRow>
		          ))}
		        </TableBody>
		      </Table>
		    </TableContainer>
		</Container>
	)
}

export default ListProducts