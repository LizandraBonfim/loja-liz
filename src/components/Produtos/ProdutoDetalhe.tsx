import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';
import { FcChargeBattery } from 'react-icons/fc';
import Button from '../Button';
import Input from '../Input';
import { MainContainer, AnimeLeft } from '../../global';
import {
    Container,
    Avaliacao,
    QtdEstoque,
    CalculoFrete,
    DetalhesCompra,
    BotaoComprar,
    ProdutoDetalheContainer
} from './produtoDetalheEstrutura';
import { Preco } from './ProdutoEstrutura';
import MiniFotos from '../MiniFotos';
import api from '../../service/api';
import Utils from '../../shared/utils/Helpers';
import { LojaContext } from '../../LojaContext';

const ProdutoDetalhe: React.FC = () => {


    const temp1 = useParams<any>();
    const id = temp1.id as number;

    const [produto, setProduto] = useState<any[]>([]);
    const { carrinhos, setCarrinhos } = useContext(LojaContext);


    useEffect(() => {
        async function getData() {
            try {


                const response = await api.get('/produtos/', {
                    params: {
                        id
                    }
                });
                const json = await response.data;
                console.log('jsonResult', response)

                setProduto(json);
                console.log('produto', produto)

                return;
            } catch (error) {
                console.log({ error: error });
                return;

            }
        };

        getData()
    }, []);


    function handleClick(item: any) {

        Utils.BotaoAdicionarCarrinho(item, carrinhos, setCarrinhos);
    }

    return (

        <MainContainer>

            <AnimeLeft>

                {produto && produto.map(item => (
                    <ProdutoDetalheContainer key={item.id}>

                        <Container key={item.id}>
                            <section>
                                <img src={item.image} alt={item.title} />
                            </section>

                            <DetalhesCompra>
                                <h1>{item.title}</h1>

                                <Avaliacao>

                                    <div>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />

                                    </div>

                                    <p>123 Avaliações</p>

                                    <QtdEstoque>
                                        <FcChargeBattery />

                                        <p> 152 Vendidos</p>

                                    </QtdEstoque>

                                </Avaliacao>
                                <Preco>

                                    <h3>R$ {item.price}</h3>
                                </Preco>

                                <p>{item.description}</p>


                                <p>Calculo frete</p>
                                <CalculoFrete>

                                    <Input type="text" nome="calculo" />
                                    <Button>  Calcular  </Button>
                                </CalculoFrete>

                                <BotaoComprar>
                                    <Button onClick={() => handleClick(item)}>  Adicionar ao Carrinho</Button>

                                    <Link to="/" >
                                        <Button>  Voltar</Button>
                                    </Link>
                                </BotaoComprar>
                            </DetalhesCompra>

                        </Container>
                        <MiniFotos src={item.image} />
                    </ProdutoDetalheContainer>

                ))}



            </AnimeLeft>

        </MainContainer>
    );
}

export default ProdutoDetalhe;