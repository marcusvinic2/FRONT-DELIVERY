import React from "react"
import LoginImg from '../../assets/login.png'
import Button from '../../components/Button'
import { Container, LoginImage, ContainerItens, P, Input, EntrarLink, ErrorMessage } from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup"
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useUser } from '../../hooks/UserContext'
import { Link } from 'react-router-dom'


function Register() {
    //validando informações dos input de registro.

    const users = useUser()

    const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatorio'),
    email: Yup.string().email('Digite um email valido').required('O email é obrigatorio'),
    password: Yup.string().required('A senha é obrigatoria').min(6, 'Senha minima de 6 digitos'),
    confirmPassword: Yup.string().required('obrigatorio confirmar senha').oneOf([Yup.ref('password')], 'As senha devem ser iguais'),
    })

    const { register, handleSubmit, formState: {errors} } = useForm({ resolver: yupResolver(schema) })

    //cadastrando usuario ao back-end
    const onSubmit = async clientData => {
        try{
            const { status } = await api.post('users', {
            name: clientData.name,
            email: clientData.email,
            password: clientData.password
          },{ validateStatus: () => true })

        if(status === 201 || status === 200){
            toast.success('Cadastrado com sucesso!')
        } else if(status === 409){
            toast.error('Email já cadastrado!')
        } else {
            throw new Error()
        }

        }catch(err){
            toast.error('Falha na conexão!')
        }
    }

    return (

    <Container>
        <LoginImage src={LoginImg} alt="logo imagem" />
            <ContainerItens>
                
                <h1>Cadastre-se</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <P error={errors.name?.message} >Nome</P>
                    <Input type="text" error={errors.name?.message} { ...register('name')} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <P error={errors.email?.message} >Email</P>
                    <Input type="email" error={errors.email?.message} { ...register('email')} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <P error={errors.password?.message} >Senha</P>
                    <Input type="password" error={errors.password?.message} { ...register('password')} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <P error={errors.confirmPassword?.message} >Cconfirmar senha</P>
                    <Input type="password" error={errors.confirmPassword?.message} { ...register('confirmPassword')} />
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 45, marginBottom: 35 }}>Cadastrar</Button>
                </form>
                
                <EntrarLink>já possui conta? <Link style={{ color: 'white' }} to="/login">Entrar</Link></EntrarLink>

            </ContainerItens>
    </Container>
    )
}

export default Register