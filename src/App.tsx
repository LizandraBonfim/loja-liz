import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './global';
import ProdutoDetalhe from './components/Produtos/ProdutoDetalhe';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produto/:id" component={ProdutoDetalhe} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
