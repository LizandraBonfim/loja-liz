import styled from 'styled-components';

export const SelectBlock = styled.div`
        margin-top: .5rem;

    label{
        font-size: 1rem;
    }
    select{
        width: 100%;
        padding: .5rem 0;
        border: 1px solid ${props => props.theme.color.primary};
        color: ${props => props.theme.color.corTextoInput};
        display: block;
        font-size: 1rem;
        padding: 0.8rem;
        border-radius: 0.4rem;
        background-color: ${props => props.theme.color.primary};
        transition: .3s;
        outline: none;

        >option{
        background: var(--border-color-escuro);
        padding: 1rem;
        &:active{
            background-color: var(--color-rosa);
            /* color: ${props => props.theme.color.corTextoInput}; */

        }
        }
    }

    option{
        font-size: 1rem;
        background: var(--color-branco);
        font-family: var(--font-oswald);   
    }
   
    @media(min-width: 700px){
        & + div{
        margin-top: 0;
    }
    }
`;