import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
