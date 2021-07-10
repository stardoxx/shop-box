import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ProductDetails} from './components/ProductDetails';
import {ProductListing} from './components/ProductListing'


function App() {
  return (
    <div className = 'App'>
      <Router>
          <Switch>
          <Header/>
          <Route path = '/' exact component = {ProductListing} />
          <Route path = '/product/:productId'  component = {ProductDetails} />
          <Route>404 not found</Route>
          </Switch>
      </Router>
    </div>
  )
}

export default App

