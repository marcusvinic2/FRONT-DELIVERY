import axios from 'axios'

const apiUpPedidos = axios.create({
	baseURL: 'http://153.92.214.229:3000'
})

export default apiUpPedidos