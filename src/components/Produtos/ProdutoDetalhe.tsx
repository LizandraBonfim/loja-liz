import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FaStar, FaShoppingCart } from 'react-icons/fa';
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

const ProdutoDetalhe: React.FC = () => {


    const temp1 = useParams<any>();

    console.log('temp1', temp1.id)

    // const id = temp1['*'].split('/')[0];
    const id = temp1.id as number;

    const [produto, setProduto] = useState<any[]>([]);


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
    // if(!produto)
    return (

        <MainContainer>

            <AnimeLeft>

                {produto && produto.map(item => (
                    <ProdutoDetalheContainer>

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
                                    <Link to="/">
                                        <Button>  Adicionar ao Carrinho</Button>
                                    </Link>


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