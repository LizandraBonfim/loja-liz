import styled from 'styled-components';
import { Container, AnimeTop } from '../../global';

export const HeaderContainer = styled.header`
    box-shadow: 0px 1px 0 0 var(--color-boxshadow-cinza);
    padding: .2rem 0;

`;

export const DisplayFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    span{
        background: var(--color-instagram);
        border-radius: 50%;
        padding: 0 0.3rem;
        top: -7px;
        right: -9px;
        color: var(--color-branco);
        position: absolute;
        font-size: 13px;
        align-items: center;
    }
    p{
        color: var(--color-cinza);
        font-size: .9rem;
    }
    div{
        a{
           
        }
    }
                
    
`;


export const Content = styled(Container)`
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: var(--color-branco);
    margin-top: .1rem;
    img{
        margin: auto;
        width: 4rem;
        display: block;
    }
`;

export const CarrinhoIcon = styled.a`
        transition: .3s;
        position: relative;

        background: none;
        &:hover{
            text-decoration: underline;
        }
        + span{
            position: absolute;
        }
        @media(max-width: 60rem){
            position: fixed;
            background: var(--color-cinza);
            bottom: 1rem;
            z-index: 1000;
            right: 1rem;
            box-shadow: 0px 0px 5px 1px var(--color-boxshadow-cinzaescuro);
        }
`

export const Nav = styled(AnimeTop)`
background: white;
padding: 1.5rem;
position: absolute;
z-index: 1000;
box-shadow: 0px 0px 5px 1px var(--color-boxshadow-cinza);
display: none;

a{
    display: grid;

    &:first-child{
        background: var(--color-secondary);
        color: var(--color-branco);
        text-align: center;
        margin-bottom: .5rem;
        padding: .5rem;
    }

    &:nth-child(2) {
        &:hover  {
            text-decoration: underline;
        }
    }
   
}


&::before{
    content: "";
    display: inline-block;
   
    width: 0; 
    height: 0; 
    left: 50%;
    top: -5px;
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--color-boxshadow-cinza);
}
`;

export const Carrinho = styled(DisplayFlex)`

    cursor: pointer;

    nav{
        &:hover div{
            display: block;
        }
    }
`;

export const HeaderTop = styled.nav`
    
    box-shadow: 0px 1px 0 0 var(--color-boxshadow-cinza);

`;

export const HeaderTopContent = styled(Container)`
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.4rem;
`;

export const RedesSociais = styled.ul`
    display: flex;
        
       li{
     
        cursor: pointer;
        color: var(--color-cinza);
        
        + li{
            margin-left: .5rem;
        }
        &:hover{

            &:nth-child(1){
                color: var(--color-instagram);
            }
            &:nth-child(2){
                color: var(--color-facebook);
            }
            &:nth-child(3){
                color: var(--color-twitter);
            }
            &:nth-child(4){
                color: var(--color-youtube);
            }
        }
           
    }

`;

export const Contatos = styled(DisplayFlex)`

    p{
        font-size: 0.9rem;
        
    }
    a{
        margin-left: 1rem;
        color: var(--color-cinza);
    }
`;


