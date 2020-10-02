import React from 'react';
import camisa1 from '../../assets/produtos/camiseta1.jpg';

import { Container } from './styles';

const MiniFotos: React.FC = () => {
    return (
        <Container>
            <img src={camisa1} alt="" />
            <img src={camisa1} alt="" />
            <img src={camisa1} alt="" />
            <img src={camisa1} alt="" />
        </Container>

    )
}

export default MiniFotos;