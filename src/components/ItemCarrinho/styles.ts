import styled from 'styled-components';
import { AnimeLeft } from '../../global';


export const ProdutoContainer = styled(AnimeLeft)`
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

    /* width: 50%; */

    button{
      align-items: center;
   
      display: flex;
      border-radius: 50%;
      background: var(--color-rosa);
      border: none;
      cursor: pointer;
      width: 25%;
      font-weight: bold;
    svg > *{
      fill: var(--color-secondary);
    
    }
    }

    p{
      /* padding: 0 2rem;     */
      width: 50%;
      margin: auto;
      text-align: center;
    }
`;


export const Lixeira = styled.div`
  > svg > polygon:nth-child(1){
    fill: rgb(255, 138, 101);
  }

  > svg > polygon:nth-child(2){
    fill: rgb(255, 171, 145);
  }

  > svg > path:nth-child(3){
    fill: rgb(179, 157, 219);
  }
`;