import styled from 'styled-components';

export const FooterContainer = styled.footer`
    box-shadow: -1px -1px 0 0 var(--color-cinza);
    padding: 2rem 0;
`;



export const Content = styled.div`
    display: grid;
    grid-template-columns: minmax(200px,1.5fr) 1fr 1fr 1fr;

    @media(max-width: 60rem){
        grid-template-columns: 1fr;
        gap: 2rem;
        margin: auto;
        text-align: center;

        div{
            border-bottom: 1px solid #eee;
            padding-bottom: 1rem;
            
        }

        ul{
            justify-content: center;
        }

        img{
           
             margin: auto;
   
        }
        
    }

   
`;

export const Institucional = styled.div`
 img{
        width: 4rem;
        margin-bottom: 1rem;

    }

    ul{
        display: flex;
        margin-top: 1rem;
        
        li{
            border: 1px solid #eee;
            padding: .5rem;
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
    }

   

`;

export const Section = styled.div`

a{
    transition: .3s;
    &:hover{
        text-decoration: underline;
    }
}

img{
    width: 10rem;
}

`;
