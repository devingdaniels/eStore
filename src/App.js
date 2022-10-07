import './App.css';
import stores from './data/stores';
import items from './data/items';
import React from 'react';

// Import Router and Route for serving SPA
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import components
import Navigation from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer'

// Static HTML web pages
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import StoresPage from './pages/StoresPage'


function App() {  
  return (
      <Router>
        <header>
          <Header/>
          <Navigation/>
        </header>        
        <main>
          <article>
          <Route path="/" exact>
              <HomePage/>
            </Route>            
            <Route path="/orderPage">
              <OrderPage items={items}/>
            </Route>
            <Route path="/storePage">
              <StoresPage stores={stores}/>
            </Route>
          </article>
        </main>

        <footer>
          <Footer/>
        </footer>
      </Router>
  );
}

export default App;