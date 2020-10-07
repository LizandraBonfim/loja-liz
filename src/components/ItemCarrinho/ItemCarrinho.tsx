import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { FcFullTrash } from 'react-icons/fc';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
    ProdutoContainer,
    BotaoQuantidade,
    Lixeira
} from './styles';

import Utils from '../../shared/utils/Helpers';
import { LojaContext } from '../../LojaContext';


interface ProdutoProps {
    itemsCarrinhos: ItemProps
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


const ItemCarrinho: React.FC<ProdutoProps> = ({ itemsCarrinhos }) => {

    const { carrinhos, setCarrinhos } = useContext(LojaContext);

    function adicionar(item: any) {
        Utils.AumentaQuantidade(item, carrinhos, setCarrinhos);
    }

    function diminuir(item: any) {
        Utils.DiminuiQuantidade(item, carrinhos, setCarrinhos);
    }

    function excluirItemCarrinho(item: any) {
        Utils.ExcluirItemDoCarrinho(item, carrinhos, setCarrinhos);
    }

    return (
        <ProdutoContainer>

            <img src={itemsCarrinhos.image} alt={itemsCarrinhos.title} />

            <div>
                <div>
                    <p>{itemsCarrinhos.title}</p>
                    {/* <p>(P)</p> */}
                    <strong> {Utils.Valores(itemsCarrinhos.price)}</strong>

                </div>

                <BotaoQuantidade>
                    <button onClick={() => diminuir(itemsCarrinhos)}>

                        <FaMinus size={20} />
                    </button>
                    <p>{itemsCarrinhos.qtd}</p>

                    <button onClick={() => adicionar(itemsCarrinhos)}>

                        <FaPlus size={20} />
                    </button>
                </BotaoQuantidade>

            </div>
            <Lixeira>
                <button onClick={() => excluirItemCarrinho(itemsCarrinhos)}>
                    <FcFullTrash size={24} />
                </button>
            </Lixeira>
        </ProdutoContainer>
    )
}

export default ItemCarrinho;