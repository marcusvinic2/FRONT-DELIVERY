import axios from 'axios'

//criando conexão com o servidor back-end
const apiUpPedidos = axios.create({
	baseURL: 'http://153.92.214.229:3000'
})


//enviando token jwt na requisição
apiUpPedidos.interceptors.request.use( async config => {
	const userData = await localStorage.getItem('uppedidos:userData')
	const token = userData && JSON.parse(userData).token
	config.headers.authorization = `Bearer ${token}`

	return config
} )

export default apiUpPedidos