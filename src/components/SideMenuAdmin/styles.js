import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div `
	background: #3C3C3C;
	width: 300px;
	left: 0px;
	top: 0px;

	hr {
		margin: 50px 15px;
	}
`

export const ItemContainer = styled.div `
	height: 60px;
	display: flex;
	align-items: center;
	background: ${props => props.isActive ? '#565656' : 'none'};
	border-radius: 2px;
	margin: 12px;
	padding-left: 20px;

	.icon {
		color: #ffffff;
	}
`

export const ListLink = styled(Link) `
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	text-decoration: none;
	margin-left: 8px;
`