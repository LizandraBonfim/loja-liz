import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import Button from '../../components/Button';
import { AnimeLeft, MainContainer, LoginContainer, Content, ColunaDois } from '../../global';
import Select from '../../components/Select';

const Cadastro: React.FC = () => {
    const [subject, setSubject] = useState('');
    const nome = useForm("campoTexto");
    const email = useForm("email");
    const senha = useForm("senha");
    const cpf = useForm();
    const telefone = useForm();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <MainContainer>

            <AnimeLeft>
                <Content>

                    <form onSubmit={handleSubmit}>

                        <h3>Seja bem vindo!</h3>

                        <Input label="Nome" type="text" nome="nome" {...nome} />

                        <ColunaDois>
                            <Input label="Senha" type="password" nome="password" {...senha} />
                            <Select value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                label="Sexo"
                                name="subject"
                                options={[
                                    { value: 'f', label: 'Feminino ' },
                                    { value: 'm', label: 'Masculino ' },
                                    { value: 'n', label: 'Não informar ' },

                                ]} >

                            </Select>
                        </ColunaDois>

                        <ColunaDois>
                            <Input label="Telefone" type="tel" nome="telefone" {...telefone} />
                            <Input label="CPF" type="text" nome="cpf" {...cpf} />
                        </ColunaDois>
                        <Input label="Email" type="email" nome="email" {...email} />






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