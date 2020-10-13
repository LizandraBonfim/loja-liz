import styled from 'styled-components';
import { Container, AnimeTop } from '../../global';

export const HeaderContainer = styled.header`
    box-shadow: 0px 1px 0 0  ${props => props.theme.color.primary};
    padding: .2rem 0;

    svg:nth-child(3)  > *{
        fill: ${props =>
        props.theme.title === 'dark' ? 'var(--color-rosa)' : props.theme.color.svg};
    }

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
        font-size: .9rem;
    }
                
    
`;

export const HeaderFixed = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: ${props => props.theme.color.background};
    box-shadow: 0px 1px 0 0  ${props => props.theme.color.primary};

    button{
        margin-top: .5rem;
    }

    div:first-child{
        padding: .5rem 0;
    }

    @media(max-width: 60rem){
        display: none;
    }
    /* #root > header > div > section > div > div.sc-hBMVcZ.sc-hHEjAm.lcbedZ.fyovhq > div > div */
   
`;
export const Content = styled.div`
    > a{
        width: 4rem;
        margin: auto;
        img{
            grid-area: logo;
            height: 100%;
            display: block;
        }
    }

    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'input logo minhaconta meuspedidos';
    /* background: var(--color-branco); */
    margin-top: .1rem;

    div:nth-child(1){
        grid-area: input;
        /* margin: 2rem 0; */

    }
    div:nth-child(2) > nav{
        grid-area: minhaconta;

    }
   

    @media (max-width:40rem){
        margin: 0 1rem;
        
        grid-template-columns: 1fr;
        grid-template-areas: 
            'logo'
            'input'
            'minhaconta'
        ;

    }
`;

export const CarrinhoIcon = styled.div`
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
            bottom: 1rem;
            z-index: 1000;
            right: 1rem;

            background: var(--color-branco);
            padding: 1rem;
            border-radius: 50%;
            box-shadow: -1px 1px 10px 2px var(--color-cinza);
            border: ${props => props.theme.color.primary};
        }
`

export const Nav = styled(AnimeTop)`
background: var(--color-branco);
padding: 1.5rem;
position: absolute;
z-index: 1000;
box-shadow: ${props => props.theme.color.primary};
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

    @media(max-width: 40rem){
        margin-top: 1rem;
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
    
    box-shadow: 0px 1px 0 0  ${props => props.theme.color.primary};

`;

export const HeaderTopContent = styled(Container)`
    
    display: grid;
    grid-template-columns: minmax(8rem , 14rem) 1fr;
    padding: 0.4rem;

    @media (max-width: 40rem) {
        font-size: .8rem;
        grid-template-columns:  1fr;

        ul{
            display: none;
        }
    }
`;

export const RedesSociais = styled.ul`
    display: flex;
        
       li{
     
        cursor: pointer;
        
        + li{
            margin-left: .5rem;
        }
        &:hover{

            &:nth-child(1) svg > * {
                fill: var(--color-instagram);
            }
            &:nth-child(2) svg > *{
                fill: var(--color-facebook);
            }
            &:nth-child(3) svg > *{
                fill: var(--color-twitter);
            }
            &:nth-child(4) svg > *{
                fill: var(--color-youtube);
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
    }
`;

export const BotaoToggle = styled.div`

    display: flex;
    align-items: center;
    position: relative;

`;

export const CampoPesquisa = styled.form`
    position: relative;
    display: flex;
    margin: 1rem 0;
    
    width: 100%;

    div{
        padding:0;
        width: 100%;
    }

    input{
        position: relative;

    }
    button{
        font-family:var(--font-roboto); 
        font-weight: bold;
        border-radius: 0 .5rem .5rem 0;
        background: transparent;
        position: absolute;
        width: 15%;
        right: 0;

        &:hover, &:focus{
            box-shadow: ${props => props.theme.title == 'light' && 'inset 0px 0px 3px 0px var(--color-instagram)'};
        }
        
    }
`;

