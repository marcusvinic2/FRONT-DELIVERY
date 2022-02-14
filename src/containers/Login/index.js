import React from "react"
import LoginImg from '../../assets/login.png'
import LogoImg from '../../assets/Logo.png'
import Button from '../../components/Button'
import { Container, LoginImage, ContainerItens, P, Input, EntrarLink, ErrorMessage } from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup"
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useUser } from '../../hooks/UserContext'
import { Link, useHistory } from 'react-router-dom'


function Login() {
    //validando informações dos input de login.
    const history = useHistory()
    const { putUserData } = useUser()

    const schema = Yup.object().shape({
    email: Yup.string().email('Digite um email valido').required('O email é obrigatorio'),
    password: Yup.string().required('A senha é obrigatoria').min(6, 'Senha minima de 6 digitos')
    })

    const { register, handleSubmit, formState: {errors} } = useForm({ resolver: yupResolver(schema) })

    //validando usuario no back-end
    const onSubmit = async clientData => {
        const { data } = await toast.promise(
                api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
                {
                  pending: 'Verificando...',
                  success: 'Seja bem vindo(a)',
                  error: 'Email ou senha incorreto. 🤯'
                }
        )
        putUserData(data)

        setTimeout(() => {
            history.push('/')
        }, 1000)
    }

    return (

    <Container>
        <LoginImage src={LoginImg} alt="logo imagem" />
            <ContainerItens>
                
                <h1>LOGIN</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}> 
                    <P>Email</P>
                    <Input type="email" error={errors.email?.message} { ...register('email')} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <P>Email</P>
                    <Input type="password" error={errors.password?.message} { ...register('password')} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 50, marginBottom: 35 }}>Entrar</Button>
                </form>
                
                <EntrarLink>Não possui conta? <Link style={{ color: 'white' }} to="/cadastro">Cadastre-se</Link></EntrarLink>

            </ContainerItens>
    </Container>
    )
}

export default Login