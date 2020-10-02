import React, { ChangeEvent, FocusEvent } from 'react';

import { Container, Error } from './styles';

interface InputProps {
    nome: string;
    label?: string;
    type: string;
    value?: any;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    erro?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({
    nome,
    label,
    type,
    onChange,
    onBlur,
    value,
    erro,
    ...rest
}) => {
    return (
        <Container>
            <label htmlFor={nome}>{label}</label>
            <input id={nome} name={nome} type={type} value={value} onChange={onChange} onBlur={onBlur} {...rest} />
            {erro && <Error>{erro}</Error>}
        </Container>
    );
};

export default Input;