import styled from 'styled-components'

export const Container = styled.div `
	background-color: #FFFFFF;
	border-radius: 20px;
	padding: 10px;
	width: max-content;
`

export const Header = styled.div `
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	padding: 10px;
	border-bottom: 1px solid #b5b5b5;

	p {
		font-size: 16px;
		color: #b5b5b5;
	}
`

export const Body = styled.div `
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: max-content;
	grid-gap: 10px;
	padding: 10px;

	img {
		border-radius: 10px;
		width: 120px;
	}

	p {
		font-size: 16px;
	}

	div {
		display: flex;
		gap: 20px;

		button {
			height: 30px;
			background: transparent;
			border: none;
			font-size: 24px;
			cursor: pointer;
		}

		p {
			margin-top: 7px;
		}
	}
`

export const EmpityCart = styled.p `
	padding: 20px;
	text-align: center;
	font-weight: bold;
`