import React, { useContext, useEffect } from 'react';
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
    HeaderFixed,
    BotaoToggle,
    Img
} from './styles';
import Input from '../Input';
import { LojaContext } from '../../LojaContext';
import { Container } from '../../global';
import HeaderNavFixed from './HeaderNavFixed';

interface Theme {
    toggleTheme(): void;
}

const Header: React.FC<Theme> = ({ toggleTheme }) => {

    const { color, title } = useContext(ThemeContext);

    const [scrolled, setScrolled] = React.useState(false);

    console.log('scrolled', scrolled)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x = ['navbar'];
    if (scrolled) {
        x.push('scrolled');
    }

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

            {scrolled
                && <HeaderFixed>
                    <HeaderNavFixed />
                </HeaderFixed>
            }
            <HeaderNavFixed />

        </HeaderContainer >
    )
}

export default Header;