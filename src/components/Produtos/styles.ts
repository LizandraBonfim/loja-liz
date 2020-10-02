import styled from 'styled-components';

export const ProdutosCard = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

   

    @media(max-width: 60rem){
        grid-template-columns: 1fr 1fr;
    }
`;