import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
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

import { ThemeContext } from 'styled-components';

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
import { LojaContext } from '../../LojaContext';

interface Theme {
    toggleTheme(): void;
}

const Header: React.FC<Theme> = ({ toggleTheme }) => {

    const { carrinhos, setCarrinhoVisivel } = useContext(LojaContext);
    const { color, title } = useContext(ThemeContext);
    const [quantidade, setQuantidade] = React.useState(0);

    React.useEffect(() => {

        if (carrinhos.length === 0) return;

        const values = carrinhos.map(e => e.qtd).reduce((a, b) => a + b);
        setQuantidade(values);
        console.log('quantidade', quantidade)

    }, [carrinhos]);


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
                            <Switch
                                onChange={toggleTheme}
                                checked={title === 'dark'}
                                checkedIcon={true}
                                uncheckedIcon={false}
                                height={10}
                                width={40}
                                handleDiameter={20}
                                offColor={'#eee'}
                                onColor={'#fc5c94'}
                                offHandleColor={'#eee'}

                            />


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

                            <span>
                                {quantidade ? quantidade : 0}
                            </span>

                        </CarrinhoIcon>
                    </div>


                </Carrinho>
            </Content>

        </HeaderContainer >
    )
}

export default Header;