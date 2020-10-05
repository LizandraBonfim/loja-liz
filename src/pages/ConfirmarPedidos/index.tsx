import React from 'react';
import { MainContainer } from '../../global';
import ItemCarrinho from '../../components/ItemCarrinho/ItemCarrinho';

import { Container, EnderecoContainer, DadosCartao, FormasDePagamento } from './styles';
import Input from '../../components/Input';

const ConfirmarPedidos: React.FC = () => {
    return (

        <MainContainer>
            <Container>
                <section>
                    <ItemCarrinho />
                    <ItemCarrinho />
                    <ItemCarrinho />
                    <ItemCarrinho />
                </section>
                <section>
                    <EnderecoContainer>

                        <aside>

                            <input type="radio" id="endereco" name="gender" value="pagamento" />
                            <div>

                                <h3>Werter Nascimento Bonfim</h3>
                                <p>Rua Luigi Galvani, 70, 6 andar</p>
                                <p>Cidade Monções</p>
                                <p>São Paulo - SP</p>
                                <p>CEP 04575-020</p>


                            </div>
                        </aside>
                    </EnderecoContainer>

                </section>

                <EnderecoContainer>

                    <aside>

                        <input type="radio" id="pagamento" name="gender" value="pagamento" />
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

                <FormasDePagamento>
                    Formas de pagamento
                </FormasDePagamento>

            </Container>
        </MainContainer>
    );
}

export default ConfirmarPedidos;