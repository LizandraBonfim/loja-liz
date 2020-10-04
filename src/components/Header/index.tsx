import React, { useState, useContext } from 'react';
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
    BotaoToggle,
    Img
} from './styles';
import Input from '../Input';
import CarrinhoModal from '../../pages/CarrinhoModal';
import { LojaContext } from '../../LojaContext';

const Header: React.FC = () => {

    const { carrinhoVisivel, setCarrinhoVisivel } = useContext(LojaContext);
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
                    <Img src={logo} alt="Logo" />
                </Link>

                <Carrinho>


                    <nav>
                        <p> <FaRegUser /> Minha Conta</p>


                        <Nav>

                            <Link to="/login">Login</Link>
                            <Link to="/cadastro">Criar conta</Link>
                        </Nav>
                    </nav>

                    <div>

                        <CarrinhoIcon onClick={() => setCarrinhoVisivel(true)}>

                            <FaShoppingBag size={20} />

                            <span>0</span>
                            {carrinhoVisivel && <CarrinhoModal />}
                        </CarrinhoIcon>
                    </div>


                </Carrinho>
            </Content>

        </HeaderContainer >
    )
}

export default Header;