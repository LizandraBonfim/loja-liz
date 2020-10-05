import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    ProdutoItem,
    DescricaoProduto,
    Preco,
    DetalhesProduto,
    ProdutoImagem
} from './ProdutoEstrutura'
import api from '../../service/api';
import { LojaContext } from '../../LojaContext';

const Produto: React.FC = () => {

    const { produtos, setProdutos } = useContext(LojaContext);

    useEffect(() => {
        async function getData() {
            try {


                const response = await api.get('/produtos');
                const json = await response.data;
                console.log('jsonResult', response)

                setProdutos(json);

                return;
            } catch (error) {
                console.log({ error: error });
                return;

            }
        };

        getData()
    }, []);

    if (!produtos) return null;

    return (
        <>
            {produtos && produtos.map(item => (

                <ProdutoItem key={item.id}>
                    <Link to={`/produto/${item.id}`} >
                        <ProdutoImagem>
                            <img src={item.image} alt={item.title} />
                        </ProdutoImagem>


                        <DescricaoProduto>
                            <div>
                                <h4>{item.title} </h4>

                                <Preco>
                                    <h3>R$ {item.price}</h3>
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


                        <button> Comprar </button>

                    </Link>

                </ProdutoItem>

            ))}
        </>


    )
}

export default Produto
