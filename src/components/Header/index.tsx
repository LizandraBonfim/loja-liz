import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaPhone,
    FaMailBulk,
    FaShoppingBag,
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaRegUser,
    FaMoon,
    FaRegLightbulb
} from 'react-icons/fa';

import logo from '../../assets/logo-escuro.png';
import {
    HeaderContainer,
    Content,
    Carrinho,
    HeaderTopContent,
    CarrinhoIcon,
    HeaderTop,
    RedesSociais,
    Contatos,
    Nav,
    BotaoToggle
} from './styles';
import Input from '../Input';

const Header: React.FC = () => {
    return (
        <HeaderContainer>

            <HeaderTop>
                <HeaderTopContent>


                    <RedesSociais>

                        <li><FaInstagram /></li>
                        <li><FaFacebook /></li>
                        <li><FaYoutube /></li>
                        <li><FaTwitter /></li>

                    </RedesSociais>

                    <Contatos>
                        <p> <FaPhone /> Tel: 11 0000-0000</p>
                        <Link to="/"><FaMailBulk /> Fale Conosco</Link>
                        <BotaoToggle >
                            <FaRegLightbulb size={20} />
                            <input type="checkbox" id="onoff1" />
                            <label htmlFor="onoff1" />
                            <FaMoon size={20} />
                        </BotaoToggle>
                    </Contatos>

                </HeaderTopContent>
            </HeaderTop>

            <Content>
                <Input nome="pesquisa" type="text" placeholder="Pesquise.." />
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>

                <Carrinho>


                    <nav>
                        <p> <FaRegUser /> Minha Conta</p>


                        <Nav>

                            <Link to="/login">Login</Link>
                            <Link to="/cadastro">Criar conta</Link>
                        </Nav>
                    </nav>

                    <CarrinhoIcon href="">

                        <FaShoppingBag size={20} color={'#b9afaf'} />

                        <span>0</span>
                    </CarrinhoIcon>


                </Carrinho>
            </Content>

        </HeaderContainer >
    )
}

export default Header;