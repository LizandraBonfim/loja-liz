import React, { useState } from 'react';

import { Container, SkeletonAtivo, Img } from './styles';

interface ImagePros {

    alt: string;
    src: string

}

const Image: React.FC<ImagePros> = ({ src, alt }) => {

    const [skeleton, setSkeleton] = useState(false);

    function handleLoad({ target }: any) {
        target.style.opacity = 1;
    }

    return (
        <Container>
            <SkeletonAtivo />
            <Img src={src} alt={alt} onLoad={handleLoad} />
        </Container>
    )
}

export default Image;