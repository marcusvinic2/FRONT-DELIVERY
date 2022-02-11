import styled from "styled-components";
import BackgroundImage from '../../assets/background.png'

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: url('${BackgroundImage}');
`

export const LoginImage = styled.img `
    height: 60%;
`

export const ContainerItens = styled.div `
    height: 60%;    
    background: #373737;
    box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
    border-radius: 0px 10px 10px 0px;
    padding: 25px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
    }

    h1 {
        color: #ffffff;
        text-align: center;
        margin-top: 20px;
    }
`

export const P = styled.p `
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin: 25px 0px 5px 0px;
    color: #ffffff;
`

export const Input = styled.input `
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    height: 38px;
    border: ${ props => (props.error ? '2px solid #cc1717' : 'none')};
    padding-left: 10px;
`

export const Button = styled.button `
    background: #9758A6;
    border-radius: 20px;
    width: 182.81px;
    height: 36.13px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #EEEEEE;
    margin-top: 50px;
    margin-bottom: 25px;

    a:hover {
        opacity: 0.8:
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