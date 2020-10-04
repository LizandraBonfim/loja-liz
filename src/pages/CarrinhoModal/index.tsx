import React, { useContext } from 'react';
import { } from 'react-icons';
import produto from '../../assets/produtos/caneca3.jpg';

import { LojaContext } from '../../LojaContext';
import { AnimeLeft } from '../../global';
import {
    Container,
    CarrinhoVazio,
    CarrinhoContainer,
    ProdutoContainer,
    BotaoQuantidade,
    TituloCarrinho
} from './styles';
import { FaTrashAlt } from 'react-icons/fa';

const CarrinhoModal: React.FC = () => {

    const { carrinhoVisivel, setCarrinhoVisivel } = useContext(LojaContext);

    return (

        <Container>
            <div onClick={() => setCarrinhoVisivel(false)}></div>

            <CarrinhoContainer>
                <section>
                    <TituloCarrinho>

                        <h1>CARRINHO DE COMPRAS</h1>
                        <p onClick={() => setCarrinhoVisivel(false)}>X</p>
                    </TituloCarrinho>

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

                </section>
            </CarrinhoContainer>
            {/* <CarrinhoVazio>O carrinho está vazio.</CarrinhoVazio> */}





        </Container >
    )
}

export default CarrinhoModal;