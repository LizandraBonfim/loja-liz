import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: grid;
`;

const keyframeSkeleton = keyframes`
    from {
        background-position: 0px;
    }
    to {
        background-position: -200%;
    }
`;

export const SkeletonAtivo = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%  #eee 100%);
  background-size: 200%;
  animation: ${keyframeSkeleton} 1.2s infinite linear;
`;

export const Img = styled.img`
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: 0.2s;
`;


