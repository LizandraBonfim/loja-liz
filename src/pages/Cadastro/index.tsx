import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import Button from '../../components/Button';
import { AnimeLeft, MainContainer, LoginContainer } from '../../global';
import { Content } from '../../global';

const Cadastro: React.FC = () => {

    const nome = useForm();
    const email = useForm("email");
    const senha = useForm("senha");
    const cpf = useForm();
    const telefone = useForm();
    const sexo = useForm();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <MainContainer>

            <AnimeLeft>
                <Content>

                    <form onSubmit={handleSubmit}>

                        <h3>Seja bem vindo!</h3>

                        <div>
                            <Input label="Nome" type="text" nome="nome" {...nome} />
                            <Input label="CPF" type="text" nome="cpf" {...cpf} />
                        </div>
                        <Input label="Email" type="email" nome="email" {...email} />

                        <div>

                            <Input label="Senha" type="password" nome="password" {...senha} />

                            <Input label="Telefone" type="tel" nome="telefone" {...telefone} />

                            <Input label="Sexo" type="text" nome="sexo" {...sexo} />
                        </div>




                        <Button > Registrar </Button>

                    </form>



                    <LoginContainer>
                        <p>Já possui cadastro ?
                            <Link to="/login" >Entrar </Link>
                        </p>

                        <p>Esqueceu a senha ?
                        <Link to="/login" > Clique aqui </Link>

                        </p>

                    </LoginContainer>
                </Content>
            </AnimeLeft>
        </MainContainer>

    )
}

export default Cadastro;