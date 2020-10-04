import React from 'react';
import produto from '../../assets/produtos/caneca3.jpg';

import {
    ProdutoContainer,
    BotaoQuantidade
} from './styles';
import { FaTrashAlt } from 'react-icons/fa';

const ItemCarrinho: React.FC = () => {
    return (
        <ProdutoContainer>

            <img src={produto} alt="produto" />

            <div>

                <div>
                    <h5>Caneca</h5>
                    <p>(P)</p>
                    <strong>R$ 80,00</strong>

                </div>
                <BotaoQuantidade>


                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </BotaoQuantidade>

            </div>
            <div>
                <FaTrashAlt />
            </div>
        </ProdutoContainer>
    )
}

export default ItemCarrinho;