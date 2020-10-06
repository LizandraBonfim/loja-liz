import React from 'react';

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