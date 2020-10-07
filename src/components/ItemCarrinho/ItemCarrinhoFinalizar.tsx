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
import { FaPlus } from 'react-icons/fa';
import { LojaContext } from '../../LojaContext';
import Utils from '../../shared/utils/Helpers';

const ItemCarrinhoFinalizar: React.FC = () => {

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

        <>

            {carrinhos.map(item => (

                <ProdutoFinalizar key={item.id}>

                    <img src={item.image} alt="produto" />

                    <div>
                        <p>{item.title} </p>
                        <p>(P)</p>
                        <strong>{Utils.Valores(item.price)} </strong>
                    </div>



                    <BotaoQuantidade>
                        <button onClick={() => diminuir(item)}>

                            <FaMinus size={20} />
                        </button>
                        <p>{item.qtd}</p>
                        <button onClick={() => adicionar(item)}>

                            <FaPlus size={20} /></button>
                    </BotaoQuantidade>

                    <Lixeira>
                        <button onClick={() => excluirItemCarrinho(item)}>
                            <FcFullTrash size={30} />
                        </button>
                    </Lixeira>
                </ProdutoFinalizar>

            ))}
        </>
    )
}

export default ItemCarrinhoFinalizar;