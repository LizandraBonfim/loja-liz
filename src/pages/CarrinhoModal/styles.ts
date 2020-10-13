import styled from 'styled-components';
import { AnimeLeft, EstiloScroll } from '../../global';

export const Container = styled.div`
    
    position: fixed;
    height: 100%;
    width: 100%;
    background: #00000047;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 1rem;

    display: grid;
    grid-template-columns: 3fr 1fr;


    input {
      background: ${props => props.theme.color.colorClaro}
    }

`;


export const CarrinhoContainer = styled(AnimeLeft)`
      box-sizing: border-box;
      position: fixed;
      height: 100%;
      width: 35%;
      align-content: space-between;
      background: var(--color-branco);
      top: 0;
      right: 0;
      z-index: 1000;
      padding: 1rem;
      border-radius: .5rem;
      gap:1rem;
      box-shadow: -1px 1px 7px var(--color-boxshadow-cinza);
      display: grid;
      grid-template-areas: 
            'titulo'
            'compras'
            'footer'
        ;
    

      @media (max-width: 60rem){
        width: 100%;
      }

      @media (min-width: 1200px){
        width: 25%;
      }
`;

export const TituloCarrinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: titulo;

    h1{
      font-family: var(--font-oswald);
    }
`;

export const BtnFinalizar = styled.div`
        grid-area: footer;

      > button{
       
        background: var(--color-secondary);
      }
`;

export const DadosTotal = styled.div`

      margin-bottom: 1rem;
    p{

      display: flex;
      justify-content: space-between;

      strong{color: var(--color-primary);}
    }
`;

export const ProdutosAdicionados = styled.section`
    overflow-y: auto;
    grid-area: compras;
    max-height: 20rem;
    
    > div + div{
      padding: 2rem 0;
      border-top: 1px dashed var(--color-boxshadow-cinza);
    }
    
    padding-right: .6rem;
    margin-top: 1rem;
    
    ${EstiloScroll}

    ::-webkit-scrollbar-track {
      width: 6px;
      background: var(--color-boxshadow-cinza);
    }
    
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);  */
    
     
`;

export const CarrinhoVazio = styled.p`
  border-radius: 2.5rem;
  border: 1px solid var(--color-instagram);
  text-align: center;
`;
