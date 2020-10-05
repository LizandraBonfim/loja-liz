import styled from 'styled-components';
import { animeTop } from '../../global';

export const Preco = styled.div`
   color: var(--color-rosa);

  
`;

export const DetalhesProduto = styled.div`

    /* margin-bottom: 1rem; */
    margin: .5rem 0;

`;

export const ProdutoImagem = styled.div`
    height: 15rem;
    padding: .5rem;

    img{
        max-height: 100%;
        object-fit: contain;
    }

    @media(max-width: 40rem){
        height: 10rem;

    }
`;


export const ProdutoItem = styled.div`
    border: 1px solid #eee;
    transition: .2s;
    padding: .1rem;

    button{
        display: none;
        margin-top: 0;
        padding: .6rem;
        border: 1px solid var(--color-secondary) ;
        font-weight: bold;
    }

    &:hover  {
            button{
                transform: translateY(-20px);
                animation: ${animeTop} .7s forwards;
                display: block;
                background: var(--color-secondary);
                color: var(--color-branco);
                cursor: pointer;
            
        }

        img{
            opacity: .5;

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
    /* padding: .6rem; */
    text-align: center;
    color: var(--color-secondary);
    background: var(--color-branco);

    h4{
        font-family: var(--font-oswald);
        height: 4rem;
        margin: 0.4rem;
        font-weight: 500;
    }

    span{
        font-size:.8rem;

        strong{
            margin: .2rem;
        }
    }

    p{
        color: #4c4c4c;
    }

    @media(max-width: 40rem){
    h4{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        height: 3rem;
    }
  
   }
`;

