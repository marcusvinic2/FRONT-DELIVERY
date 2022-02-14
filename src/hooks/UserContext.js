import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {

	const [userData, setUserData] = useState({})

	//gravando dados do usuario no localStorage do navegador.
	const putUserData = async userInfo => {
		setUserData(userInfo)
		await localStorage.setItem('uppedidos:userData', JSON.stringify(userInfo))
	}

	//recuperando dados do usuario
	useEffect(() => {
		const loadUserData = async () => {
			const clientInfo = await localStorage.getItem('uppedidos:userData')

			if(clientInfo){
				setUserData(JSON.parse(clientInfo))
			}
		}

	loadUserData()
	}, [])

	return (
		<UserContext.Provider value={{ putUserData, userData }}>{children}</UserContext.Provider>
		)
}


export const useUser = () => {
	const context = useContext(UserContext)

	if(!context){
		throw new Error('Falha ao carregar o context: UserContext')
	}
	return context
}


UserProvider.propTypes = {
	children: PropTypes.node
}