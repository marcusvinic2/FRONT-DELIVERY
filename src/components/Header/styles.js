import styled from 'styled-components'

export const Container = styled.div `
	height: 72px;
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-around;
`

export const ContainerLeft = styled.div `
	display: flex;
	gap: 30px;
`

export const ContainerRigth = styled.div `
	display: flex;
	align-items: center;
	gap: 20px;
	cursor: pointer;
`

export const Line = styled.div `
	height: 40px;
	border-right: 0.5px solid #bababa;
`

export const ContainerText = styled.div `
	p {
		font-style: normal;
	 	font-weight: 300;
	 	font-size: 14px;
	 	line-height: 16px;
	 	color: #555555;
	}
`

export const PageLink = styled.a `
 	cursor: pointer;
 	text-decoration: none;
 	color: ${props => (props.isActive ? '#9758A6' : '#555555')};
 	font-size: 16px;
 	line-height: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const PageLinkExit = styled.a `
 	font-style: normal;
 	font-weight: bold;
 	font-size: 14px;
 	line-height: 16px;
 	display: flex;
 	align-items: center;
 	color: #9758a6;
 	cursor: pointer;
`