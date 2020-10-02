import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './global';
import ProdutoDetalhe from './components/Produtos/ProdutoDetalhe';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produto/:id" component={ProdutoDetalhe} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
