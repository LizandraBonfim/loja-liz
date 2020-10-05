import React from 'react';
import ItemCarrinhoFinalizar from '../../components/ItemCarrinho/ItemCarrinhoFinalizar';

import {
    Container,
    EnderecoContainer,
    DadosCartao,
    FormasDePagamento,
    LabelInputRadio,
    CarrinhoContainer
} from './styles';
import Input from '../../components/Input';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Titulo } from '../Home/styles';

const ConfirmarPedidos: React.FC = () => {
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

                            <h4>Werter Nascimento Bonfim</h4>
                            <p>Rua Luigi Galvani, 70, 6 andar</p>
                            <p>Cidade Monções</p>
                            <p>São Paulo - SP</p>
                            <p>CEP 04575-020</p>


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
                        </DadosCartao>

                    </div>
                </aside>
            </EnderecoContainer>

            <CarrinhoContainer>
                <ItemCarrinhoFinalizar />
                <ItemCarrinhoFinalizar />
                <ItemCarrinhoFinalizar />
                <ItemCarrinhoFinalizar />
                <ItemCarrinhoFinalizar />

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