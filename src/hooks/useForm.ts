import { useState, ChangeEvent } from 'react';

const defaultFunction = (value: string) => value;

interface ValidatorBase {
    regex: RegExp;
    message: string;
    mask: (valor: string) => string;
}

interface ValidatorType {
    [id: string]: ValidatorBase;
}

const validators: ValidatorType =
{
    numeroResidencia: {
        regex: /.{1,}/,
        message: 'Campo deve conter mais de 1 caracteres',
        mask: defaultFunction

    },
    estado: {
        regex: /\w{2,}/,
        message: 'Campo deve conter mais de 1 caracteres',
        mask: defaultFunction

    },

    campoTexto: {
        regex: /.{3}/,
        message: 'Campo deve conter mais de 3 caracteres',
        mask: defaultFunction
    },
    login: {
        regex: /.{3}/,
        message: 'Campo deve conter mais de 3 caracteres',
        mask: defaultFunction
    },

    senha: {
        regex: /.{3}/,
        message: 'Campo deve conter mais de 3 caracteres',
        mask: defaultFunction
    },

    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido',
        mask: defaultFunction
    },
    number: {
        regex: /^\d{1,}$/,
        message: 'Utilize apenas numeros',
        mask: defaultFunction
    },
    cep: {
        regex: /^\d{8}$/,
        message: 'Deve ser informado Cep válido',
        mask: function (valor: string) {

            return valor.replace(/\s/g, "").match(/.{1,5}/g)?.join("-").substr(0, 9) || "";

        }
    }
};


type typeInput = 'nome' | 'email' | 'number' | 'login' | 'senha' | 'cep' | 'campoTexto' | 'numeroResidencia' | 'estado' | undefined;

interface Response {

    value: any;
    setValue: any;
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

        if (type) {
            const mask = validators[type].mask(target.value);
            //setValue(mask);
        }

        if (erro)
            isValid(target.value)

        setValue(target.value);

    }

    function PreenchidosAutomaticamente(x: any) {
        setValue(x);
        isValid(x);
    }

    return {
        value,
        setValue: PreenchidosAutomaticamente,
        erro,
        onChange,
        isValid: () => isValid(value),
        onBlur: () => isValid(value)

    }
}

export default useForm;