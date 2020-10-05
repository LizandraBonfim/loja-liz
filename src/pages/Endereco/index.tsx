import React, { useState, useEffect } from 'react';
import { useForm as useForms } from "react-hook-form";

import Input from '../../components/Input';
import { MainContainer, AnimeLeft, ColunaDois, Content } from '../../global';
import useForm from '../../hooks/useForm';
import Select from '../../components/Select';
import Button from '../../components/Button';

interface PropsCep {
    bairro: string;
    cep: string;
    complemento: string;
    localidade: string;
    logradouro: string;
    uf: string;
}


const Endereco: React.FC = () => {

    const cep = useForm("cep");
    const nome = useForm("campoTexto");
    const rua = useForm("campoTexto");
    const numero = useForm();
    const complemento = useForm();
    const bairro = useForm("campoTexto");
    const estado = useForm("estado");
    const municipio = useForm("campoTexto");
    const descricao = useForm();

    const [subject, setSubject] = useState('');
    const { register, handleSubmit } = useForms();
    const [dadosCep, setDadosCep] = useState();
    const [dados, setDados] = useState<PropsCep>({} as PropsCep);
    console.log('subdadosCepject', dadosCep)

    function FuncaoSubmit(e: any) {
        e.preventDefault();
    };


    useEffect(() => {
        async function getData() {
            try {


                if (!cep.isValid) return;
                const result = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
                const jsonResult = await result.json();
                console.log('jsonResult', result)

                setDadosCep(jsonResult);

                rua.setValue(jsonResult.logradouro)
                municipio.setValue(jsonResult.localidade)
                estado.setValue(jsonResult.uf)
                bairro.setValue(jsonResult.bairro)

                return;
            } catch (error) {
                console.log({ error: error });
                return;

            }
        };

        getData()
    }, [cep.value]);



    return (
        <MainContainer>

            <AnimeLeft>
                <Content>

                    <form onSubmit={handleSubmit(FuncaoSubmit)}>

                        <h3>Cadastre um endereço</h3>

                        <Input
                            label="Nome do destinatário"
                            type="text"
                            nome="nome"
                            {...nome}
                        />

                        <ColunaDois>
                            <Input
                                label="Cep"
                                type="text"
                                nome="cep"
                                {...cep}
                            />

                            <Input
                                label="Numero"
                                type="text"
                                nome="numero"
                                {...numero}
                            />

                        </ColunaDois>

                        <Input
                            label="Rua"
                            type="text"
                            nome="rua"
                            {...rua}
                        />

                        <ColunaDois>

                            <Input
                                label="Municipio"
                                type="text" nome="municipio"
                                {...municipio}
                            />
                            <Input
                                label="Estado"
                                type="text" nome="estado"
                                {...estado}
                            />

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

                        {subject === 'outro' && <AnimeLeft>
                            <Input
                                label="Descrição"
                                type="text"
                                nome="descricao"
                                {...descricao}
                            />
                        </AnimeLeft>}




                        <ColunaDois>
                            <Input
                                label="Complemento"
                                type="text"
                                nome="complemento"
                                {...complemento}
                            />
                            <Input
                                label="Bairro"
                                type="text"
                                nome="bairro"
                                {...bairro}
                            />
                        </ColunaDois>


                        <Button > Registrar </Button>

                    </form>


                </Content>
            </AnimeLeft>
        </MainContainer>

    )
}



export default Endereco;