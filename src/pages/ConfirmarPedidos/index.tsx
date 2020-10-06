import React, { useContext } from 'react';
import ItemCarrinhoFinalizar from '../../components/ItemCarrinho/ItemCarrinhoFinalizar';

import carrinhovazio from '../../assets/preview.gif';

import Input from '../../components/Input';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Titulo } from '../Home/styles';
import { Link } from 'react-router-dom';
import { LojaContext } from '../../LojaContext';

import {
    Container,
    EnderecoContainer,
    DadosCartao,
    FormasDePagamento,
    LabelInputRadio,
    CarrinhoContainer
} from './styles';

const ConfirmarPedidos: React.FC = () => {

    const { carrinhos } = useContext(LojaContext);
    return (

        <Container>

            <section>
                <EnderecoContainer>

                    <Titulo>
                        <AiOutlineDoubleRight />
                        <h1>Dados da entrega</h1>
                    </Titulo>
                    <aside>
                        <LabelInputRadio htmlFor="endereco"  >

                            <input type="radio" id="endereco" name="endereco" value="endereco" />

                        </LabelInputRadio>
                        <div>

                            <h4>Joe</h4>
                            <p>Rua Luigi Galvani, 70, 6 andar</p>
                            <p>Cidade Monções</p>
                            <p>São Paulo - SP</p>
                            <p>CEP 04575-020</p>

                            <Link to="/endereco">Cadastrar novo endereço</Link>

                        </div>
                    </aside>
                </EnderecoContainer>

            </section>

            <EnderecoContainer>
                <Titulo>
                    <AiOutlineDoubleRight />
                    <h1>Dados do pagamento</h1>
                </Titulo>
                <aside>
                    <LabelInputRadio htmlFor="pagamento">

                        <input type="radio" id="pagamento" name="pagamento" value="pagamento" />

                    </LabelInputRadio>

                    <div>
                        <h3>523421######2959</h3>

                        <DadosCartao>
                            <div>
                                <Input type="text" nome="cvv" label="CVV" />
                            </div>
                            <Input type="number" nome="parcelas" label="Parcelar em" />
                            <Link to="/endereco">Cadastrar novo cartão de crédito</Link>

                        </DadosCartao>

                    </div>
                </aside>
            </EnderecoContainer>

            <CarrinhoContainer>
                <ItemCarrinhoFinalizar />

                {carrinhos.length <= 0 &&
                    <img src={carrinhovazio} alt="Carrinho vazio" />
                }
            </CarrinhoContainer>

            <FormasDePagamento>
                <section>
                    <div>

                        Formas de pagamento
                    </div>

                    <div>

                        Formas de pagamento
                    </div>

                    <div>

                        Formas de pagamento
                    </div>

                    <div>

                        Formas de pagamento
                    </div>
                </section>
            </FormasDePagamento>

        </Container>
    );
}

export default ConfirmarPedidos;