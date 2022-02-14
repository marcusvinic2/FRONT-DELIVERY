import styled from "styled-components";
import BackgroundImage from '../../assets/background.png'

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    @media(min-width: 999px) {
    background {
        display: none;
        height: 100%;
        width: 100%;
     }

    }

`

export const LoginImage = styled.img `
    height: 80%;

    @media(max-width: 999px) {
     display: none;
  }

`

export const ContainerItens = styled.div `
    height: 80%;    
    background: #373737;
    box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
    border-radius: 0px 10px 10px 0px;
    padding: 25px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 999px) {
        width: 100%;
        height: 100%;
        border-radius: 0px 0px 0px 0px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    h1 {
        color: #ffffff;
        text-align: center;
        margin-top: 10px;
    }
`

export const P = styled.p `
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-top: ${ props => (props.error ? '12px' : '25px')};
    margin-bottom: 5px;
    color: #ffffff;
`

export const Input = styled.input `
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    height: 38px;
    border: ${ props => (props.error ? '2px solid #cc1717' : 'none')};
    padding-left: 10px;

    @media(max-width: 999px) {
        width: 100%;
        padding-left: 0px;
    }
`

export const EntrarLink = styled.p `
    width: 187.3px;
    height: 22.99px;
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    font-weight: 300;

    a {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const ErrorMessage = styled.p `
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #cc1717;
    margin-top: 3px;
`