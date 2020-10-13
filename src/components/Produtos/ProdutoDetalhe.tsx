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
import Image from '../../shared/Image';
import { toast } from 'react-toastify';
import Loading from '../Loading';

const ProdutoDetalhe: React.FC = () => {


    const temp1 = useParams<any>();
    const id = temp1.id as number;

    const [produto, setProduto] = useState<any[]>([]);
    const { carrinhos, setCarrinhos, loading, setLoading } = useContext(LojaContext);


    useEffect(() => {
        async function getData() {
            try {

                setLoading(true);

                const response = await api.get('/produtos/', {
                    params: {
                        id
                    }
                });
                const json = await response.data;

                setProduto(json);
                setLoading(false);
                return;

            } catch (error) {
                toast.dark('Ocorreu um erro.');
                setLoading(false);
                return;
            }
        };

        getData()
    }, []);



    function handleClick(item: any) {

        Utils.BotaoAdicionarCarrinho(item, carrinhos, setCarrinhos);
    }

    if (loading) return <MainContainer><Loading /></MainContainer>

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

                                    <h3>{Utils.Valores(item.price)}</h3>
                                </Preco>

                                <p>{item.description}</p>


                                <p>Calculo frete</p>
                                <CalculoFrete>

                                    <Input type="text" nome="calculo" />
                                    <Button>  Calcular  </Button>
                                </CalculoFrete>

                                <BotaoComprar>
                                    <Button onClick={() => handleClick(item)}>
                                        Adicionar ao Carrinho
                                    </Button>

                                    <Link to="/" >
                                        <Button>  Voltar</Button>
                                    </Link>
                                </BotaoComprar>
                            </DetalhesCompra>

                            <MiniFotos src={item.image} />
                        </Container>
                    </ProdutoDetalheContainer>

                ))}



            </AnimeLeft>

        </MainContainer>
    );
}

export default ProdutoDetalhe;