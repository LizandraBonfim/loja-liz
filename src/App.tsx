import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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


function App() {



  return (
    <BrowserRouter>
      <GlobalStyle />
      <ContainerLoja>
        <Header />

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
        <Footer />
        <CarrinhoModal />
      </ContainerLoja >
    </BrowserRouter>
  );
}

export default App;
