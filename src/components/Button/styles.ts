import styled from 'styled-components';

export const Container = styled.button`
    transition: 0.6s;
    font-size: 1rem;
    font-family: var(--font-oswald);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: var(--color-rosa);
    color: var(--color-branco);
    min-width: 8rem;
    font-weight: bold;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    :hover,
    :focus {
        
        outline: none;
   
    box-shadow: 0px 0px 0px 1px var(--color-branco), 0px 0px 16px 0px var(--color-instagram);
    
    }
    :disabled {
        opacity: 0.5;
        cursor: wait;
    }
`;