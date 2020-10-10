import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0;
  gap: 1rem;
  display: grid;
  height: 8rem;
  grid-template-columns: repeat(8, 1fr);
  grid-area: minifotos;

  img{

    background: var(--color-branco);
    box-shadow: 0px 0px 3px var(--color-cinza);
    cursor: pointer;
    height: 100%;
    object-fit: contain;

    &:hover{
        box-shadow: 0px 0px 3px var(--color-rosa);

    }
  }

  @media(max-width: 60rem){
    grid-template-columns: repeat(5, 1fr);

  }

  @media(max-width: 40rem){
    grid-template-columns: repeat(3, 1fr);

  }
`;
