import styled from 'styled-components';
// import { darken } from 'polished';
import { DisplayFlex } from '../Header/styles';

export const Container = styled.div`
    border: 1px solid #eee;
    display: grid;
    grid-template-columns: 1fr 1fr;


    h1{
        font-size: 2rem;
        padding: .5rem 0;
    }

    h3{
        font-size: 1.2rem;
        padding: .8rem 0;
    }

    h5{
        padding: .8rem 0;
        
        border-bottom: 1px solid #eee;
    }

    @media(max-width: 60rem){
        grid-template-columns: 1fr;
        gap: 3rem;

        h3{
            font-size: 1rem;
        }
    }
`;



export const DetalhesCompra = styled.section`
    border-left: 1px solid #eee;
    padding: 1rem;
    font-family: var(--font-oswald);

    
`;

export const QtdEstoque = styled.div`
    display: flex;
    p{
        color: green;

    }
`;

export const Avaliacao = styled(DisplayFlex)`
    display: flex;
   align-items: center;
   padding: 0 1rem 0 0;

    div{

        margin-left: 0;

        /* &:first-child svg > *{
            fill: #fb1;
            
            > svg:nth-child(5) svg  > *{
                fill: var(--color-cinza);
            }

        } */
    }
    @media(max-width: 60rem){
        padding: 0;
    }

`;

export const CalculoFrete = styled.form`

    position: relative;
    display: flex;
    margin: 1rem 0;
    

    input, button{
        /* padding: .5rem; */
        /* border-color: var(--color-rosa); */
        /* border: 1px solid var(--color-cinza); */
    }

    input{
        border-radius: 1rem;
    }

    div{
        padding:0;
    }
    button{
        font-family:var(--font-roboto); 
        font-weight: bold;
        border-radius: 0 1rem 1rem 0;
        background: var(--color-rosa);
        position: absolute;
        width: 30%;
        right: 0;
        
    }
`;


export const BotaoComprar = styled.div`
    margin-top: 2rem;
    display: flex;
    cursor: pointer;
    justify-content: space-between;

    a {        

        &:nth-child(2) > button{
            color: var(--color-rosa);
            background: var(--color-branco);
            border: 1px solid var(--color-rosa);
        }
        
    }
    
`;
