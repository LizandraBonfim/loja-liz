import styled from 'styled-components';
import { AnimeLeft } from '../../global';


export const ProdutoContainer = styled(AnimeLeft)`
  display: grid ;
  /* grid-template-columns: 1fr 1fr auto;
   */
  grid-template-columns: minmax(3rem,4rem) minmax(10rem,12rem) auto;
  align-items: center;
  justify-content: space-around;

 

  gap:1rem;
  margin: 2rem 0;

  h3{
    font-family: var(--font-roboto);
    font-weight: 500;
    word-break: break-all;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  strong{
    margin: 1rem 0;
  }



  
`;


export const BotaoQuantidade = styled.div`

    display: flex;
    border-radius: 1.2rem;
    border: 1px solid var(--color-cinza);
    padding: .2rem;
    line-height: 2;
    margin-top: 1rem;
    width: 50%;

    button{
      align-items: center;
   
      display: flex;
      border-radius: 50%;
      background: var(--color-rosa);
      border: none;
      cursor: pointer;
      width: 25%;
      font-weight: bold;
       > svg{

        /* padding: .5rem; */
        margin: auto;
       }
    svg > *{
      fill: var(--color-branco);
    
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

button{
  background: none;
  outline: none;
  border: none;
  
  > svg > polygon:nth-child(1){
    fill: rgb(255, 138, 101);
  }

  > svg > polygon:nth-child(2){
    fill: rgb(255, 171, 145);
  }

  > svg > path:nth-child(3){
    fill: rgb(179, 157, 219);
  }
}

`;

export const ProdutoFinalizar = styled.section`
    display: grid ;
    gap: 1rem;
    grid-template-columns: minmax(3rem,5rem) 1fr minmax(5rem,6rem) minmax(5rem,9rem) auto; 
    margin-bottom: 2rem;
    align-items: center;
    justify-items: end;

    img{
    border: ${props => props.theme.title === 'dark' && '2px solid #616e96'}

  }

  & > div:nth-child(2) {
    margin-top: 0; 
    width: 90%;
  }

  & > div:nth-child(3) {
      margin-top: 0; 
      width: 90%;
    }

  @media(max-width:60rem){
    gap: .2rem;
    grid-template-columns:repeat(4, auto);
    
  
    & > div:nth-child(3) {
      margin-top: 0; 
      width: 90%;
    }
    strong{
      font-size: .8rem;
    }

    > div:nth-child(2) > p:nth-child(1){
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
      height: 2.9rem;
    }
  }
`;