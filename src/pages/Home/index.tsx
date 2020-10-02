import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { MainContainer } from '../../global';
import { Banner } from '../../components/Banner';
import Produtos from '../../components/Produtos';
import { Titulo } from './styles';

const Home: React.FC = () => {
    return (
        <>

            <Banner />
            <MainContainer>

                <Titulo>
                    <AiOutlineDoubleRight />
                    <h1>Produtos Destaque</h1>
                </Titulo>

                <Produtos />
            </MainContainer>
        </>
    )
}

export default Home;