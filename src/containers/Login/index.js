import react from "react"
import LoginImg from '../../assets/login.png'
import LogoImg from '../../assets/logo.png'
import { Container, LoginImage, ContainerItens, P, Input, Button, EntrarLink } from './styles'

function Login() {

    return (

    <Container>
        <LoginImage src={LoginImg} alt="logo imagem" />
            <ContainerItens>

                <img src={LogoImg} alt="logo imagem" />
                <h1>LOGIN</h1>

                <P>Email</P>
                <Input />

                <P>Email</P>
                <Input />

                <Button>Entrar</Button>
                
                <EntrarLink>Não possui conta? <a>Cadastre-se</a></EntrarLink>

            </ContainerItens>
    </Container>

    )
}

export default Login