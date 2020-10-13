import styled from 'styled-components';
import { EstiloScroll } from '../../global';

export const Container = styled.section`


margin: 3rem;

  display: grid;
  grid-template-columns: minmax(29rem,1fr) 2fr;
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

        a{
            color: #007bff;
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
    margin: 0;
    grid-template-areas: 
    'pedidoscarrinho '
    'endereco'
    'dadoscartao '
    'formaspagamento'
    ;
    padding: 0 .5rem;

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
        margin-bottom: 1rem;
    }
`;

export const DadosCartao = styled.form`

`;
export const CarrinhoVazio = styled.section`
padding: 5rem;
img{
    width: 25rem;
    margin: auto;
}

@media (max-width: 60rem){
    padding: 5rem 0 ;

}

`;


export const CarrinhoContainer = styled.section`
    grid-area: pedidoscarrinho;
    overflow-y: auto;
    margin-top: 4rem;

    padding: 0 1rem;
    ${EstiloScroll}

    
        ::-webkit-scrollbar-track {
            width: 6px;
            background: var(--color-boxshadow-cinza);
        }

        > section + section{
            border-top: 1px dashed var(--color-cinza);
            padding-top: 1rem;
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
