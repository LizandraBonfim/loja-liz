import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html{
    --color-boxshadow-cinza: #e2e2e2;
    --color-primary: #333;
    --color-secondary: #000;
    --color-cinza: #b9afaf;
    --color-branco:  #fff;
    --color-boxshadow-cinzaescuro: #403b3b;
    --color-instagram:  #f008bd;
    --color-facebook: rgb(7, 79, 212);
    --color-twitter: red;
    --color-youtube: #0a95b8;
    --color-backgroundblack: #282c34;
    --color-rosa : #fc5c94;
    --font-oswald : "Oswald", Helvetica, Sans-Serif;
  
    
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
    color: var(--color-primary);
    
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

  button{
    border: none;
    outline: none;
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


export const animeTop = keyframes`
  to{
    opacity: 1;
    transform: initial;
  }
`

export const AnimeTop = styled.div`
  opacity: 0;
  transform: translateY(-20px);
  animation: ${animeTop} .4s forwards;
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
        border: 1px solid var(--color-boxshadow-cinza);
        border-radius: .4rem;
    
   
`;


export const DisplayFlex = styled.div`
    display: flex;
    justify-content: space-between;
`;


export default GlobalStyle; 