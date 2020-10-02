import styled from 'styled-components';


export const Container = styled.div`
    padding: .5rem 0;
    input{
        border: 1px solid #eee;
        display: block;
        font-size: 1rem;
        padding: 0.8rem;
        border-radius: 0.4rem;
        background-color: #eee;
        transition: .3s;
        outline: none;
    &:hover, &:focus{
        outline: none;
        background: white;
        box-shadow: 0 0 2px 1px var(--color-rosa);
        border-color: var(--color-instagram);
    }
    }
`;

export const Error = styled.p`
    color: #f31;
    font-size: 0.875rem;
    margin-top: 0.25rem;
`;