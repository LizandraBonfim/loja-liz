import styled from 'styled-components';

export const SelectBlock = styled.div`
        margin-top: .5rem;

    label{
        font-size: 1rem;
    }
    select{
        width: 100%;
        padding: .5rem 0;
        border: 1px solid #eee;
        display: block;
        font-size: 1rem;
        padding: 0.8rem;
        border-radius: 0.4rem;
        background-color: #eee;
        transition: .3s;
        outline: none;

        >option{

        padding: 1rem;
        &:active{
            background-color: var(--color-rosa);

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