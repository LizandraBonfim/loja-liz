import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsX } from 'react-icons/bs';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { LojaContext } from '../../LojaContext';
import { AnimeLeft } from '../../global';
import {
    Container,
    CarrinhoVazio,
    CarrinhoContainer,
    TituloCarrinho,
    DadosTotal,
    BtnFinalizar,
    ProdutosAdicionados
} from './styles';
import { CalculoFrete } from '../../components/Produtos/produtoDetalheEstrutura';
import ItemCarrinho from '../../components/ItemCarrinho/ItemCarrinho';

const CarrinhoModal: React.FC = () => {
    const history = useHistory();
    const { carrinhoVisivel, setCarrinhoVisivel, carrinhos, produtosAdicionados } = useContext(LojaContext);

    console.log('carrinhos', carrinhos)

    function handleFinalizar() {
        setCarrinhoVisivel(false);
        history.push('/finalizar');
    }



    if (!carrinhoVisivel) return null;
    return (

        <Container>
            <div onClick={() => setCarrinhoVisivel(false)}></div>

            <CarrinhoContainer>
                <section>
                    <TituloCarrinho>

                        <h1>CARRINHO DE COMPRAS</h1>
                        <p onClick={() => setCarrinhoVisivel(false)}><BsX /></p>
                    </TituloCarrinho>

                </section>
                <ProdutosAdicionados>
                    {produtosAdicionados.map(item => (
                        <ItemCarrinho
                            key={item.id}
                            itemsCarrinhos={item}
                        />

                    ))}

                </ProdutosAdicionados>
                <BtnFinalizar>
                    <p>Calculo frete</p>
                    <CalculoFrete>

                        <Input type="text" nome="calculo" />
                        <Button>  Calcular  </Button>
                    </CalculoFrete>

                    <DadosTotal>
                        <p>Subtotal: <strong>R$179,90</strong></p>
                        <p>Frete: <strong>Calcule para visualizar</strong></p>

                    </DadosTotal>
                    <Button onClick={handleFinalizar}>Finalizar compra</Button>
                </BtnFinalizar>
            </CarrinhoContainer>

            {produtosAdicionados.length <= 0 && <CarrinhoVazio>O carrinho está vazio.</CarrinhoVazio>}
        </Container >
    )
}

export default CarrinhoModal;