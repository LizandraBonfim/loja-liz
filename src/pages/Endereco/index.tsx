import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';
import { MainContainer, AnimeLeft, ColunaDois, Content } from '../../global';
import useForm from '../../hooks/useForm';
import Select from '../../components/Select';
import Button from '../../components/Button';

// import { Container } from './styles';

const Endereco: React.FC = () => {

    const [subject, setSubject] = useState('');

    console.log('subject', subject)

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    };

    const cep = useForm();
    const nome = useForm();
    const rua = useForm();
    const numero = useForm();
    const complemento = useForm();
    const bairro = useForm();
    const estado = useForm();
    const municipio = useForm();
    const descricao = useForm();


    return (
        <MainContainer>

            <AnimeLeft>
                <Content>

                    <form onSubmit={handleSubmit}>

                        <h3>Cadastre um endereço</h3>

                        <Input label="Nome do destinatário" type="text" nome="rua" {...nome} />
                        <Input label="Rua" type="text" nome="rua" {...rua} />

                        <ColunaDois>
                            <Input label="Cep" type="text" nome="cep" {...cep} />
                            <Input label="Numero" type="text" nome="numero" {...numero} />

                        </ColunaDois>

                        <Select value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            label="Tipo de endereço"
                            name="subject"
                            options={[
                                { value: 'casa', label: 'Casa ' },
                                { value: 'apartamento', label: 'Apartamento ' },
                                { value: 'comercio', label: 'Comercio ' },
                                { value: 'trabalho', label: 'Trabalho ' },
                                { value: 'outro', label: 'Outro ' },

                            ]} >


                        </Select>
                        {subject === 'outro' && <AnimeLeft><Input label="Descrição" type="text" nome="descricao" {...descricao} /></AnimeLeft>}

                        <ColunaDois>
                            <Input label="Municipio" type="text" nome="municipio" {...municipio} />
                            <Input label="Estado" type="text" nome="estado" {...estado} />
                        </ColunaDois>
                        <ColunaDois>

                        </ColunaDois>

                        <Input label="Complemento" type="text" nome="complemento" {...complemento} />






                        <Button > Registrar </Button>

                    </form>



                    {/* <LoginContainer>
                        <p>Já possui cadastro ?
                    <Link to="/login" >Entrar </Link>
                        </p>

                        <p>Esqueceu a senha ?
                <Link to="/login" > Clique aqui </Link>

                        </p>

                    </LoginContainer> */}
                </Content>
            </AnimeLeft>
        </MainContainer>

    )
}

export default Endereco;