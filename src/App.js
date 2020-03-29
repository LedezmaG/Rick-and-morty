import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import './Assets/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route component={ NotFound } />
        </Switch>
      </Layout>
    </BrowserRouter>
  
  );
}

export default App;
