import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BsX } from 'react-icons/bs';

import carrinhovazio from '../../assets/preview.gif';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { LojaContext } from '../../LojaContext';
import { AnimeLeft } from '../../global';
import {
    Container,
    CarrinhoContainer,
    TituloCarrinho,
    DadosTotal,
    BtnFinalizar,
    ProdutosAdicionados
} from './styles';
import { CalculoFrete } from '../../components/Produtos/produtoDetalheEstrutura';
import ItemCarrinho from '../../components/ItemCarrinho/ItemCarrinho';
import Utils from '../../shared/utils/Helpers';

const CarrinhoModal: React.FC = () => {
    const history = useHistory();
    const { carrinhoVisivel, setCarrinhoVisivel, carrinhos } = useContext(LojaContext);

    function handleFinalizar() {
        setCarrinhoVisivel(false);
        history.push('/finalizar');
    }

    if (!carrinhoVisivel) return null;
    return (

        <Container >
            <div onClick={() => setCarrinhoVisivel(false)}></div>

            <CarrinhoContainer>
                <section>
                    <TituloCarrinho>

                        <h1>CARRINHO DE COMPRAS</h1>
                        <p onClick={() => setCarrinhoVisivel(false)}>
                            <BsX size={24} />
                        </p>
                    </TituloCarrinho>

                </section>
                <AnimeLeft>

                    <ProdutosAdicionados>

                        {carrinhos.length <= 0 &&
                            <img src={carrinhovazio} alt="Carrinho vazio" />
                        }

                        {carrinhos.map(item => (
                            <ItemCarrinho
                                key={item.id}
                                itemsCarrinhos={item}
                            />

                        ))}

                    </ProdutosAdicionados>
                </AnimeLeft>

                <BtnFinalizar>
                    <p>Calculo frete</p>
                    <CalculoFrete>

                        <Input type="text" nome="calculo" />
                        <Button>  Calcular  </Button>
                    </CalculoFrete>

                    <DadosTotal>
                        <p>Subtotal:
                            <strong>R$ {carrinhos.length >= 1
                                ? Utils.Subtotal(carrinhos)
                                : '0,00'}

                            </strong>
                        </p>
                        <p>Frete: <strong>Calcule para visualizar</strong></p>

                    </DadosTotal>
                    <Button onClick={handleFinalizar}>Finalizar compra</Button>
                </BtnFinalizar>
            </CarrinhoContainer>

        </Container >
    )
}

export default CarrinhoModal;