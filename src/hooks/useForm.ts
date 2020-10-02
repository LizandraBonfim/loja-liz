import React, { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';

interface ValidatorBase {
    regex: RegExp,
    message: string;
}

interface ValidatorType {
    [id: string]: ValidatorBase;
}

const validators: ValidatorType =
{
    login: {
        regex: /.{3}/,
        message: 'Campo deve conter mais de 3 caracteres'
    },

    senha: {
        regex: /.{3}/,
        message: 'Campo deve conter mais de 3 caracteres'
    },

    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido'
    },
    number: {
        regex: /^\d{1,}$/,
        message: 'Utilize apenas numeros'
    }
};


type typeInput = 'nome' | 'email' | 'number' | 'login' | 'senha' | undefined;

interface Response {

    value: any;
    erro: string | undefined;
    isValid: () => boolean;
    onBlur: () => boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void

}


const useForm = (type: typeInput = undefined): Response => {

    const [value, setValue] = useState<string | number | Date | undefined>("")
    const [erro, setError] = useState<string | undefined>();

    const
        validationExist = (type: string) => !!validators[type],
        didNotPassTheRegex = (type: string, valor: any) => !validators[type].regex.test(valor);



    function isValid(value: any): boolean {

        console.log('valor', value)

        // Most not apply validation
        if (type === undefined) return true;

        if (typeof value === 'string' && value.length === 0) {
            setError('Preencha um valor');
            return false;
        }

        if (validationExist(type) && didNotPassTheRegex(type, value)) {

            setError(validators[type].message);
            return false;
        }

        setError(undefined);
        return true;

    }


    function onChange({ target }: ChangeEvent<HTMLInputElement>): void {

        if (erro)
            isValid(target.value)

        setValue(target.value);

    }


    return {
        value,
        erro,
        onChange,
        isValid: () => isValid(value),
        onBlur: () => isValid(value)

    }
}

export default useForm;