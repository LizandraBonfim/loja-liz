import styled, { createGlobalStyle, keyframes, css } from 'styled-components';

export const EstiloScroll = css`
     ::-webkit-scrollbar {
      width: .6rem;
    }

    ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: var(--color-rosa); 
    }
`;

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
    --border-color-escuro: border-color: rgb(24, 26, 31);
    --font-roboto: Roboto, Helvetica, Sans-Serif;
    
  }
  
svg > * {
  fill: ${props => props.theme.color.svg};

}

  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
    font-family: var(--font-roboto);
    box-sizing: border-box;
    transition: all 0.50s linear;
    ${EstiloScroll}
 
    /* background: #24292e; */
  }

  /* header{
    border-color: rgb(24, 26, 31);
  } */

  ::placeholder{
    font-family:  var(--font-oswald) ;
    /* text-transform: uppercase; */
  }


  input, button{
    width: 100%;
    display: block;
    box-sizing: border-box;
    /* border: none; */
    outline: none;
  }
  a{
    text-decoration: none;
    color:  ${props => props.theme.color.text};
    
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

  .v1iv1ovxu > button{
  width: 10%;
}

`;

export const Container = styled.section`
    max-width: 65rem;
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
        font-size: 2rem;
        margin-bottom: 1rem;

    }
    form{
        padding: 1rem;
        
        button{
          margin-top: 2rem;
        }
    }
        max-width: 30rem;
        margin: auto;
        border-radius: .4rem;
    
   
`;

export const LoginContainer = styled.div`
        padding: 1rem;
                
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

export const ColunaDois = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;


`;


export default GlobalStyle; 