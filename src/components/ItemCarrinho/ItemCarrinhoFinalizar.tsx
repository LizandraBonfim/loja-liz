import React, { useContext } from 'react';
import produto from '../../assets/produtos/caneca3.jpg';

import { FcFullTrash } from 'react-icons/fc';
import { FaMinus } from 'react-icons/fa';
import { BiMinus } from 'react-icons/bi';
import {
    ProdutoFinalizar,
    BotaoQuantidade,
    Lixeira
} from './styles';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import { LojaContext } from '../../LojaContext';

const ItemCarrinhoFinalizar: React.FC = () => {

    const { carrinhoVisivel, setCarrinhoVisivel, carrinhos, produtosAdicionados } = useContext(LojaContext);

    return (

        <>

            {produtosAdicionados.map(item => (

                <ProdutoFinalizar key={item.id}>

                    <img src={item.image} alt="produto" />

                    <div>
                        <p>{item.title} </p>
                        <p>(P)</p>
                        <strong>R$ {item.price} </strong>
                    </div>



                    <BotaoQuantidade>
                        <button><FaMinus size={20} /></button>
                        <p>{item.qtd}</p>
                        <button><FaPlus size={20} /></button>
                    </BotaoQuantidade>

                    <Lixeira>
                        <FcFullTrash size={30} />
                    </Lixeira>
                </ProdutoFinalizar>

            ))}
        </>
    )
}

export default ItemCarrinhoFinalizar;