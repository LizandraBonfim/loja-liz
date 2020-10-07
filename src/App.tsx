import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { DefaultContext } from 'react-icons/lib';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './global';
import ProdutoDetalhe from './components/Produtos/ProdutoDetalhe';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Endereco from './pages/Endereco';
import ContainerLoja from './LojaContext';
import ConfirmarPedidos from './pages/ConfirmarPedidos';
import CarrinhoModal from './pages/CarrinhoModal';

import light from './shared/theme/light';
import dark from './shared/theme/dark';
import usePersisteTheme from './shared/theme/usePersisteTheme';
import Notificacao from './components/Notificacao';


function App() {

  const [theme, setTheme] = usePersisteTheme<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <GlobalStyle />
        <ContainerLoja>
          <Header toggleTheme={toggleTheme} />

          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/produto/:id" component={ProdutoDetalhe} />
              <Route path="/cadastro" component={Cadastro} />
              <Route path="/endereco" component={Endereco} />
              <Route path="/login" component={Login} />
              <Route path="/finalizar" component={ConfirmarPedidos} />
            </Switch>
          </main>
          {/* <Notificacao /> */}
          <Footer />
          <CarrinhoModal />
        </ContainerLoja >
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
