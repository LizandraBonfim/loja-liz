import styled from 'styled-components';
import { animeTop } from '../../global';

export const Preco = styled.div`
   color: var(--color-rosa);
`;

export const DetalhesProduto = styled.div`

`;



export const ProdutoItem = styled.div`
    border: 1px solid #eee;
    transition: .2s;
    

    button{
        display: none;
        margin-top: 0;
        padding: .6rem;
    }

    &:hover  {
       
            button{
                transform: translateY(-20px);
                animation: ${animeTop} .7s forwards;
                display: block;
                background: var(--color-secondary);
                color: var(--color-branco);
            
        }
    }

    &:hover{
        box-shadow: 0px 0px 11px #e2dbdb;

        ${DetalhesProduto} {
            display: none;
        } 
    }
    
`;


export const DescricaoProduto = styled.div`
    padding: .6rem;
    text-align: center;
    color: var(--color-secondary);

    h4{
        font-family: var(--font-oswald);
    }

    span{
        font-size:.8rem;
    }

    p{
        color: #4c4c4c;
    }
`;

