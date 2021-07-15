import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing'
import CategoryListing from './components/CategoryListing';
import DisplayCategoryComponent from './components/DisplayCategoryComponent'
import CartDisplay from './components/cart/CartDisplay';

function App() {
  return (
    <div className = 'App'>
      {/* <Router>
          <Switch>
          <Header/>
          <Route path = '/' exact component = {ProductListing} />
          <Route path = '/product/:productId'  component = {ProductDetails} />
          <Route>404 not found</Route>
          </Switch>
      </Router>
    </div> */}
    <Header/>
    <CategoryListing/>
    <CartDisplay/>
    {/* <ProductListing/> */}
    {/* <DisplayCategoryComponent/> */}
    
    </div>

  )
}

export default App

