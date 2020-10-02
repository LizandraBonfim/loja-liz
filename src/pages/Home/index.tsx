import React from 'react';
import { MainContainer } from '../../global';
import { Banner } from '../../components/Banner';

// import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <>

            <Banner />
            <MainContainer>

                <h1>Home</h1>
            </MainContainer>
        </>
    )
}

export default Home;