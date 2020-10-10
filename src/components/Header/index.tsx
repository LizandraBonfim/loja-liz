import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import {
    FaPhone,
    FaMailBulk,
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaMoon,
    FaRegLightbulb
} from 'react-icons/fa';

import { ThemeContext } from 'styled-components';
import HeaderNavFixed from './HeaderNavFixed';

import {
    HeaderContainer,
    HeaderTopContent,
    HeaderTop,
    RedesSociais,
    Contatos,
    HeaderFixed,
    BotaoToggle,

} from './styles';

interface Theme {
    toggleTheme(): void;
}

const Header: React.FC<Theme> = ({ toggleTheme }) => {

    const { title } = useContext(ThemeContext);

    const [scrolled, setScrolled] = React.useState(false);


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