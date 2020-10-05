import styled from 'styled-components';
import { EstiloScroll } from '../../global';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  ' endereco pedidoscarrinho'
  ' dadoscartao  pedidoscarrinho '
  'formaspagamento formaspagamento'
  ;
  
  
  grid-template-rows: 15rem 15rem auto;

  gap:2rem;

 

    aside{

        display: grid;
        grid-template-columns: auto 1fr;
        gap:2rem;
        align-items: center;
        border: 1px solid var(--color-boxshadow-cinza);
        padding: 1rem;
        border-radius: .5rem;

      
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
    grid-template-areas: 
    'pedidoscarrinho '
    'endereco'
    'dadoscartao '
    'formaspagamento'
    ;

    }
`;

export const LabelInputRadio = styled.label`
 

   input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: 25px;
    height: 25px;
    padding: 6px;
    background-clip: content-box;
    border: 2px solid var(--color-cinza);
    background-color: var(--color-branco);

    border-radius: 50%;
}

    input[type="radio"]:checked {
        background-color: var(--color-rosa);
    }

`;

export const EnderecoContainer = styled.div`
    margin-bottom: 3rem;

    h3{
        color: var(--color-primary);
        margin-bottom: 1rem;
    }
`;

export const DadosCartao = styled.form`

`;

export const CarrinhoContainer = styled.section`
    grid-area: pedidoscarrinho;
    /* grid-column: 1/2; */
    overflow-y: auto;
    padding: 0 1rem;
    ${EstiloScroll}

        ::-webkit-scrollbar-track {
        width: 6px;
        background: var(--color-boxshadow-cinza);
        }
`;

export const FormasDePagamento = styled.section`

    grid-area: formaspagamento;
    margin-top: 5rem;
section{

    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 40rem){
    grid-template-columns: 1fr;

}
`;
