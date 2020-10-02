import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html{
    --color-boxshadow-cinza: #e2e2e2;
    --color-primary: #333;
    --color-cinza: #b9afaf;
    --color-branco:  #fff;
    --color-boxshadow-cinzaescuro: #403b3b;
    --color-instagram:  #f008bd;
    --color-facebook: rgb(7, 79, 212);
    --color-twitter: red;
    --color-youtube: #0a95b8;
    --color-backgroundblack: #282c34;
    --color-rosa : #fc5c94;
  
    
  }


  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }
  input, button{
    width: 100%;
    display: block;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: #333;
    
  }
  p, ul, li, h3, h1, h5{
    margin: 0;
    padding: 0;
  }
  img{
    display: block;
    width: 100%;
  }
  li{
    list-style: none;
  }
`;

export const Container = styled.section`
     max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
`;

export const MainContainer = styled(Container)`
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 15rem);
`;

const animeLeft = keyframes`
  to{
    opacity: 1;
    transform: initial;
  }
`

export const AnimeLeft = styled.div`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} .4s forwards;
`;

export const Content = styled.section`
    h3{
        text-align: center;
    }
    form{
        padding: 1rem;
    }
        max-width: 25rem;
        margin: auto;
        border: 1px solid #b9afaf;
        border-radius: .4rem;
    
   
`;

export const LoginContainer = styled.div`
        padding: 1rem;
        background: #e0e0e0;
        box-shadow: -1px -1px 0 0 #b9afaf;
        
        p{
            text-align: center;
        }
        a{
            color: #007bff;
            margin-left: .4rem;
            font-weight: bold;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        }
      
`;

export const DisplayFlex = styled.div`
    display: flex;
    justify-content: space-between;
`;


export default GlobalStyle; 