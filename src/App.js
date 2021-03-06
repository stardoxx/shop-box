import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProductDetails from './components/ProductDetails';
// import ProductListing from './components/ProductListing'
// import CategoryListing from './components/CategoryListing';
// import DisplayCategoryComponent from './components/DisplayCategoryComponent'
// import CartDisplay from './components/cart/CartDisplay';
// import CartPrices from './components/cart/CartPrices.jsx'
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import SignInSignUp from './pages/SignInSignUp';
function App() {
  return (
    <Router>
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
    {/* <Header/>
    <CategoryListing/>
    <CartDisplay/>
    <CartPrices/> */}
    {/* <ProductListing/> */}
    {/* <DisplayCategoryComponent/> */}
    {/* <HomePage/>
      <CartPage/> */}
      
          
          <Header/>
          {/* <SignInSignUp/> */}
          <Switch>
          <Route path = '/' exact component = {HomePage} />
          <Route path = '/cart'  component = {CartPage} />
          {/* <Route path = '/signin'  component = {SignInSignUp}/> */}
          </Switch>
    </div>
      </Router>
  )
}

export default App

