import styled from 'styled-components';


export const ProdutoContainer = styled.div`
  display: grid ;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  gap:1rem;
  
`;


export const BotaoQuantidade = styled.div`

    display: flex;
    border-radius: 1rem;
    border: 1px solid var(--color-cinza);
    padding: .2rem;

    width: 50%;

    button{
      border-radius: 50%;
      background: var(--color-rosa);
      border: none;
      cursor: pointer;
      width: 25%;
      font-weight: bold;
      color: var(--color-branco);

    }

    p{
      /* padding: 0 2rem;     */
      width: 50%;
      text-align: center;
    }
`;
