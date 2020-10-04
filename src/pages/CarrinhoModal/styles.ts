import styled from 'styled-components';

export const Container = styled.div`
    
    position: fixed;
    height: 100%;
    width: 100%;
    background: #00000047;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 1rem;

`;

export const CarrinhoContainer = styled.div`
     position: fixed;
      height: 100%;
      width: 30%;
      background: var(--color-branco);
      top: 0;
      right: 0;
      z-index: 100;
      padding: 1rem;
      border-radius: .5rem;
      box-shadow: -1px 1px 7px var(--color-boxshadow-cinza);

      @media (max-width: 40rem){
        width: 93%;
      }
`;

export const TituloCarrinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

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

    width: 75%;

    button{
      border-radius: 50%;
      background: var(--color-rosa);
      border: none;
      cursor: pointer;
      width: 20%;
      font-weight: bold;
    }

    p{
      /* padding: 0 2rem;     */
      width: 60%;
      text-align: center;
    }
`;


export const CarrinhoVazio = styled.p`
  border-radius: 2.5rem;
  border: 1px solid var(--color-instagram);
  text-align: center;
`;
