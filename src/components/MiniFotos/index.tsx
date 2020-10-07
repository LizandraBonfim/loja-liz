import React from 'react';

import { Container } from './styles';
import Image from '../../shared/Image';

interface ImageProps {
    src: any
}

const MiniFotos: React.FC<ImageProps> = ({ src }) => {
    return (
        <Container>
            <Image src={src} alt="mini fotos" />
        </Container>

    )
}

export default MiniFotos;