import React from 'react';
import Produto from './Produto';
import { ProdutosCard } from './styles';

const Produtos: React.FC = () => {


    return (

        <ProdutosCard>
            <Produto />

        </ProdutosCard>

    );
}

export default Produtos;