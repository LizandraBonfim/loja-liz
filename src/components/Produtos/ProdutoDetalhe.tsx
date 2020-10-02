import React from 'react';
import { Link } from 'react-router-dom';

import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { FcChargeBattery } from 'react-icons/fc';
import produto from '../../assets/produtos/caneca3.jpg';
import Button from '../Button';
import Input from '../Input';
import { MainContainer, AnimeLeft } from '../../global';
import {
    Container,
    Avaliacao,
    QtdEstoque,
    CalculoFrete,
    DetalhesCompra,
    BotaoComprar
} from './produtoDetalheEstrutura';
import { Preco } from './ProdutoEstrutura';



const ProdutoDetalhe: React.FC = () => {

    return (

        <MainContainer>
            <AnimeLeft>
                <Container>
                    <section>
                        <img src={produto} alt="Produto" />
                    </section>

                    <DetalhesCompra>
                        <h1>Caneca</h1>

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

                            <h3>R$ 50,00</h3>
                        </Preco>

                        <h3>Caneca porcelana com impressão térmica de alta resistência.</h3>


                        <p>Calculo frete</p>
                        <CalculoFrete>

                            <Input type="text" nome="calculo" />
                            <Button>  Calcular  </Button>
                        </CalculoFrete>

                        <BotaoComprar>
                            <Link to="/">
                                <Button>  Adicionar ao Carrinho</Button>
                            </Link>


                            <Link to="/">
                                <Button>  Voltar</Button>
                            </Link>
                        </BotaoComprar>
                    </DetalhesCompra>
                </Container>
            </AnimeLeft>

        </MainContainer>
    );
}

export default ProdutoDetalhe;