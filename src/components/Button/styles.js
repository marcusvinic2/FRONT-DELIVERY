import styled from 'styled-components'

export const ContainerButton = styled.button `
    background: #f3c43d;
    border-radius: 20px;
    
    height: 36.13px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #EEEEEE;

    &:hover {
        opacity: 0.8;
    }

    &:action {
        opacity: 0.6;
    }
`