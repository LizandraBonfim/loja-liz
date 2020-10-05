import React, { useContext } from 'react';
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
    const { carrinhoVisivel, setCarrinhoVisivel } = useContext(LojaContext);

    function handleFinalizar() {
        setCarrinhoVisivel(false);
        history.push('/finalizar');
    }
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
                    <ItemCarrinho />
                    <ItemCarrinho />
                    <ItemCarrinho />
                    <ItemCarrinho />
                    <ItemCarrinho />
                    <ItemCarrinho />

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
            {/* <CarrinhoVazio>O carrinho está vazio.</CarrinhoVazio> */}




        </Container >
    )
}

export default CarrinhoModal;