import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Utils from '../../shared/utils/Helpers';
import { LojaContext } from '../../LojaContext';

import {
    ProdutoItem,
    DescricaoProduto,
    Preco,
    DetalhesProduto,
    ProdutoImagem
} from './ProdutoEstrutura'

interface ProdutoProps {
    item: ItemProps
}

interface ItemProps {
    image: string;
    title: string;
    price: string;
    qtd: string;
    category?: string;
    subtotal: any;
    id: any;
}


const Produto: React.FC<ProdutoProps> = ({ item }) => {
    const { carrinhos, setCarrinhos } = useContext(LojaContext);


    function handleClick(item: any) {

        Utils.BotaoAdicionarCarrinho(item, carrinhos, setCarrinhos);
    }


    return (
        <ProdutoItem key={item.id}>
            <Link to={`/produto/${item.id}`} >
                <ProdutoImagem>
                    <img src={item.image} alt={item.title} />
                </ProdutoImagem>


                <DescricaoProduto>
                    <div>
                        <h4>{item.title} </h4>

                        <Preco>
                            <h3> {Utils.Valores(item.price)}</h3>
                        </Preco>

                        <DetalhesProduto>

                            <span>
                                <strong>4</strong>x  de
                                        <strong>R$10,00</strong>
                                        sem juros
                                    </span>

                            {/* <p>{item.description}</p> */}
                        </DetalhesProduto>
                    </div>
                </DescricaoProduto>
            </Link>
            <button onClick={() => handleClick(item)}> Comprar </button>
        </ProdutoItem>
    )
}

export default Produto
