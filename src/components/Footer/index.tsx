import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-escuro.png';
import googleStore from '../../assets/playmarket.png';
import appstore from '../../assets/appstore.png';
import { RedesSociais } from '../Header/styles';
import Input from '../Input';
import Button from '../Button';

import { Container } from '../../global';

import { FooterContainer, Content, Institucional, Section, Newsletter } from './styles';
import { CalculoFrete } from '../Produtos/produtoDetalheEstrutura';

const Footer: React.FC = () => {
    return (
        <FooterContainer>

            <Newsletter>
                <h1>Newsletter</h1>
                <p>Assine para receber nossas ofertas</p>

                <CalculoFrete>
                    <Input placeholder="Digite seu e-mail" nome="newsletter" type="text" label="" />
                    <Button >Assinar </Button>
                </CalculoFrete>
            </Newsletter>

            <Container>
                <Content>
                    <Institucional>
                        <img src={logo} alt="Logo" />
                        <p>Ecommerce institucional</p>


                        <RedesSociais>

                            <li><FaInstagram /></li>
                            <li><FaFacebook /></li>
                            <li><FaYoutube /></li>
                            <li><FaTwitter /></li>

                        </RedesSociais>

                    </Institucional>

                    <Section>
                        <h3>Sobre</h3>

                        <ul>
                            <li><a href="/">Sobre</a></li>
                            <li> <a href="/">Serviços</a> </li>
                            <li><a href="/">Termo de uso</a></li>
                            <li><a href="/">FAQ</a></li>
                        </ul>
                    </Section>

                    <Section>
                        <h3>Serviços</h3>

                        <ul>
                            <li><a href="/">Meus pedidos</a></li>
                            <li> <a href="/">Meu Perfil</a> </li>
                            <li><a href="/">Cancelamento</a></li>
                            <li><a href="/">Reembolsos</a></li>
                        </ul>
                    </Section>

                    <Section>
                        <h3>Mobile</h3>

                        <ul>
                            <li><img src={appstore} alt="App Store" /></li>
                            <li><img src={googleStore} alt="Google Store" /></li>


                        </ul>
                    </Section>

                </Content>

            </Container>
            <h5>Desenvolvido por <Link to="https://www.linkedin.com/in/lizandra-bonfim/">Lizandra Bonfim</Link></h5>
        </FooterContainer>
    )
}

export default Footer;