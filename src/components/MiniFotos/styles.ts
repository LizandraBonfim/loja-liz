import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  img{

    box-shadow: 0px 0px 3px var(--color-cinza);
    cursor: pointer;
    padding: 0.5rem;

    &:hover{
        box-shadow: 0px 0px 3px var(--color-rosa);

    }
  }
`;
