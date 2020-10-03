import React from 'react';
import { Link } from 'react-router-dom';
import camisa1 from '../../assets/produtos/camiseta1.jpg';
import { ProdutoItem, DescricaoProduto, Preco, DetalhesProduto } from './ProdutoEstrutura'

const Produto: React.FC = () => {

    return (
        <Link to="/produto/camisa1">

            <ProdutoItem>
                <div>
                    <img src={camisa1} alt="Camisa 1" />
                </div>


                <DescricaoProduto>
                    <div>
                        <h4>Camisa Cinza</h4>

                        <Preco>
                            <h3>R$ 80,00</h3>
                        </Preco>

                        <DetalhesProduto>

                            <span>
                                <strong>4</strong>x  de
                                <strong>R$10,00</strong>
                                 sem juros
                            </span>

                            <p>Camisa 100% algodão</p>
                        </DetalhesProduto>
                    </div>
                </DescricaoProduto>


                <button> Comprar </button>


            </ProdutoItem>

        </Link>


    )
}

export default Produto
