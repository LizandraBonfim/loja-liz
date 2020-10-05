import React from 'react';
import camisa1 from '../../assets/produtos/camiseta1.jpg';

import { Container } from './styles';

interface ImageProps {
    src: any
}

const MiniFotos: React.FC<ImageProps> = ({ src }) => {
    return (
        <Container>
            <img src={src} alt="" />
        </Container>

    )
}

export default MiniFotos;