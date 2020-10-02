import React from 'react';
import Produto from './Produto';
import { ProdutosCard } from './styles';

const Produtos: React.FC = () => {


    return (

        <ProdutosCard>
            <Produto />
            < Produto />
            <Produto />
            < Produto />
            <Produto />
            < Produto />
        </ProdutosCard>

    );
}

export default Produtos;