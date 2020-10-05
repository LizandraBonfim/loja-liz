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

const ItemCarrinho: React.FC = () => {
    return (
        <ProdutoContainer>

            <img src={produto} alt="produto" />

            <div>

                <div>
                    <h3>Caneca</h3>
                    <p>(P)</p>
                    <strong>R$ 80,00</strong>

                </div>
                <BotaoQuantidade>


                    <button><FaMinus size={20} /></button>
                    <p>1</p>
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