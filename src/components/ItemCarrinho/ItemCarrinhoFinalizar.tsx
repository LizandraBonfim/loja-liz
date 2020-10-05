import React from 'react';
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
import { GrFormSubtract } from 'react-icons/gr';

const ItemCarrinhoFinalizar: React.FC = () => {
    return (
        <ProdutoFinalizar>

            <img src={produto} alt="produto" />


            <div>
                <p>Caneca</p>
                <p>(P)</p>
            </div>

            <div>
                <strong>R$ 80,00</strong>
            </div>

            <BotaoQuantidade>
                <button><FaMinus size={20} /></button>
                <p>1</p>
                <button><FaPlus size={20} /></button>
            </BotaoQuantidade>

            <Lixeira>
                <FcFullTrash size={30} />
            </Lixeira>
        </ProdutoFinalizar>
    )
}

export default ItemCarrinhoFinalizar;