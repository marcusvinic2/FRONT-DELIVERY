import react from "react"
import LoginImg from '../../assets/login.png'
import LogoImg from '../../assets/logo.png'
import { Container, LoginImage, ContainerItens, P, Input, Button, EntrarLink, ErrorMessage } from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup"
import api from '../../services/api'



function Login() {

    const schema = Yup.object().shape({
    email: Yup.string().email('Digite um email valido').required('O email é obrigatorio'),
    password: Yup.string().required('A senha é obrigatoria').min(6, 'Senha minima de 6 digitos')
    })

    const { register, handleSubmit, formState: {errors} } = useForm({ resolver: yupResolver(schema) })
    const onSubmit = async clientData => {
        const response = await api.post('sessions', {
            email: clientData.email,
            password: clientData.password
        })
        console.log(response)
    }

    return (

    <Container>
        <LoginImage src={LoginImg} alt="logo imagem" />
            <ContainerItens>

                <img src={LogoImg} alt="logo imagem" />
                <h1>LOGIN</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}> 
                    <P>Email</P>
                    <Input type="email" error={errors.email?.message} { ...register('email')} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <P>Email</P>
                    <Input type="password" error={errors.password?.message} { ...register('password')} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit">Entrar</Button>
                </form>
                
                <EntrarLink>Não possui conta? <a>Cadastre-se</a></EntrarLink>

            </ContainerItens>
    </Container>
    )
}

export default Login