import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 500px;
`;

export const Head = styled.header`
width: 100%;
height: 70px;
background-color: brown;
display: flex;
align-items: center;
justify-content: center;
`;

export const Titulo = styled.p`
font-size: 25px;
color: #00FF00;
`;

export const BemVindo = styled.h1`
font-size: ${props => `${props.tamanho}px`};
color: ${props => `#${props.cor}`};
`;