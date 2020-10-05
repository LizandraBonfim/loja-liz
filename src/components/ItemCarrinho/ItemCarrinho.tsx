import React from 'react';
import produto from '../../assets/produtos/caneca3.jpg';

import { FcFullTrash } from 'react-icons/fc';
import { FaMinus } from 'react-icons/fa';
import { BiMinus } from 'react-icons/bi';
import {
    ProdutoContainer,
    BotaoQuantidade,
    Lixeira
} from './styles';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import { GrFormSubtract } from 'react-icons/gr';
import { AiFillTwitterCircle } from 'react-icons/ai';

interface ProdutoProps {
    itemsCarrinhos: ItemProps
}

interface ItemProps {
    image: string;
    title: string;
    price: string;
    qtd: string;
    category?: string;
    subtotal: string;
    id: any;
}


const ItemCarrinho: React.FC<ProdutoProps> = ({ itemsCarrinhos }) => {

    console.log('src, title, price', itemsCarrinhos)
    return (
        <ProdutoContainer>

            <img src={itemsCarrinhos.image} alt={itemsCarrinhos.title} />

            <div>

                <div>
                    <p>{itemsCarrinhos.title}</p>
                    {/* <p>(P)</p> */}
                    <strong>R$ {itemsCarrinhos.price}</strong>

                </div>

                <BotaoQuantidade>
                    <button><FaMinus size={20} /></button>
                    <p>{itemsCarrinhos.qtd}</p>
                    <button><FaPlus size={20} /></button>
                </BotaoQuantidade>

            </div>
            <Lixeira>
                <FcFullTrash size={24} />
            </Lixeira>
        </ProdutoContainer>
    )
}

export default ItemCarrinho;