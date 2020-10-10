import styled from 'styled-components';

import { DisplayFlex } from '../Header/styles';

export const ProdutoDetalheContainer = styled.div`
     

`;

export const Container = styled.div`

    display: grid;
    grid-template-columns: minmax(27rem,1fr) minmax(29rem,2fr);
    grid-template-areas:
        ' imagem detalhes'
        ' minifotos minifotos ';
    /* grid-template-rows: 35rem auto; */
    grid-auto-rows: 35rem auto;

    section:first-child{
       
        /* margin: auto; */
        border: 1px solid  ${props => props.theme.color.primary};

        padding: 1rem;
        background: var(--color-branco);
        grid-area: imagem;

        img{
            max-height: 100%;
        }
    }

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
        border-bottom: 1px solid  ${props => props.theme.color.primary};
    }

    @media(max-width: 60rem){
        grid-template-columns: 1fr;
        grid-template-areas: 
            'minifotos'
            'imagem'
            'detalhes'
        ;
        grid-auto-rows: auto;

        h3{
            font-size: 1rem;
        }
    }
`;



export const DetalhesCompra = styled.section`
    border: 1px solid  ${props => props.theme.color.primary};

    border-left: 1px solid ${props => props.theme.color.primary};
    padding: 1rem;
    font-family: var(--font-oswald);
    grid-area: detalhes;

    background: ${props => props.theme.color.background};
    
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

    div{ margin-left: 0;}

    @media(max-width: 60rem){
        padding: 0;
    }

`;

export const CalculoFrete = styled.form`

    position: relative;
    display: flex;
    margin: 1rem 0;
    

    input{
        border-radius: 1rem;
    }

    div{
        padding:0;
        width: 100%;
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

    button{
        transition: 0.6s;

    }

    button:first-child{
        margin-right: 1rem;
    }

    a {        

        &:nth-child(2) > button{
            color: var(--color-rosa);
            background: var(--color-branco);
            /* border: 1px solid var(--color-rosa);
             */
             box-shadow:inset 0px 0px 0px 1px;
            transition: 0.6s;


             &:hover{
                transition: 0.6s;
                box-shadow: 0px 0px 0px 1px var(--color-instagram), 0px 0px 16px 0px var(--color-rosa);

             }
        }
        
    }

    @media (max-width: 40rem){

        display: block;

        button:first-child{
            margin-bottom: 1rem;
        }
    }
    
`;
