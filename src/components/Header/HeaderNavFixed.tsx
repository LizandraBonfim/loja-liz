import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FaShoppingBag,
    FaRegUser,
} from 'react-icons/fa';
import logo from '../../assets/logo-escuro.png';
import Input from '../Input';
import { LojaContext } from '../../LojaContext';
import { Container } from '../../global';
import Image from '../../shared/Image';


import {
    Content,
    Carrinho,
    CarrinhoIcon,
    Nav,
} from './styles';



const HeaderNavFixed: React.FC = () => {
    const { carrinhos, setCarrinhoVisivel } = useContext(LojaContext);
    const [quantidade, setQuantidade] = React.useState(0);

    useEffect(() => {

        if (carrinhos.length === 0) {
            setQuantidade(0);
            return;
        };

        const values = carrinhos.map(e => e.qtd).reduce((a, b) => a + b);
        setQuantidade(values);
    }, [carrinhos]);


    return (
        <Container >
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
        </Container>

    )
}

export default HeaderNavFixed;