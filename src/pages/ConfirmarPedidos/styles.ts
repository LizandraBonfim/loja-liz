import styled from 'styled-components';
import { EstiloScroll } from '../../global';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  'pedidoscarrinho endereco'
  'pedidoscarrinho dadoscartao'
  'formaspagamento formaspagamento'
  ;
  grid-template-rows: 15rem 15rem auto;

  gap:2rem;

  section:first-child{
    grid-area: pedidoscarrinho;
    grid-column: 1/2;
    overflow-y: auto;
    padding: 0 1rem;
    ${EstiloScroll}

        ::-webkit-scrollbar-track {
        width: 6px;
        background: var(--color-boxshadow-cinza);
        }

  }

    aside{

        display: grid;
        grid-template-columns: auto 1fr;
        gap:2rem;
        align-items: center;
        border: 1px solid var(--color-boxshadow-cinza);
        padding: 1rem;
        border-radius: .5rem;

        h3{
            color: var(--color-primary);
        }
        p{

        color: var(--color-cinza);
        }

        &:nth-child(1){
            grid-area: endereco;

        }
        &:nth-child(2){
            grid-area: dadoscartao;

        }
    }
  @media (max-width: 40rem){
    grid-template-columns: 1fr;

    }
`;

export const EnderecoContainer = styled.div`
    margin-bottom: 3rem;
`;

export const DadosCartao = styled.form`

`;

export const FormasDePagamento = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-area: formaspagamento;
`;
