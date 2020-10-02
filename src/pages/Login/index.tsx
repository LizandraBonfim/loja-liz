import React, { FormEvent } from 'react';

import { Link } from 'react-router-dom';
import { AnimeLeft, MainContainer, LoginContainer } from '../../global';

import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import Button from '../../components/Button';
import { Content } from '../../global';

const Login: React.FC = () => {

    const email = useForm("email");
    const senha = useForm("senha");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (

        <MainContainer>

            <AnimeLeft>
                <Content>

                    <form onSubmit={handleSubmit}>

                        <h3>Login</h3>
                        <Input type="email" nome="email" placeholder="Email" {...email} />

                        <Input placeholder="Senha" type="password" nome="password" {...senha} />

                        <Button >
                            Entrar
                    </Button>

                    </form>



                    <LoginContainer>
                        <p>Não possui cadastro?
                            <Link to="/cadastro" >Criar uma conta </Link>
                        </p>

                    </LoginContainer>
                </Content>
            </AnimeLeft>
        </MainContainer>

    )
}

export default Login;