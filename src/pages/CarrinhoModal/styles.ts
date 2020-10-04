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

    h1{
      font-family: var(--font-oswald);
    }
`;

export const BtnFinalizar = styled.div`
       
        bottom: 3rem;
        width: 91%;
        left: 1rem;
        position: absolute;
     button{
       
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
    height: 22rem;
    margin-top: 1rem;
    
    ::-webkit-scrollbar-track {
      width: 6px;
      background: var(--color-boxshadow-cinza);
    }
    ::-webkit-scrollbar {
      width: .6rem;
    }
    ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: var(--color-rosa); 
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);  */
}

    
     
`;

export const CarrinhoVazio = styled.p`
  border-radius: 2.5rem;
  border: 1px solid var(--color-instagram);
  text-align: center;
`;
