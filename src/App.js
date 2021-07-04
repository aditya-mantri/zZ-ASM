import './App.css';
import {BrowserRouter as Router, Switch, Route,Redirect } from  'react-router-dom'
import Home from './pages';
import SignupPage from './Signup/index.jsx';
import SigninPage from './pages/signin';
import RecoveryPage from './Recovery/index.jsx'
import Hangman from './hangman/Hangman';
import Board from './lightsout/Board';
import Game from './yahztee/App';
import firebase from 'firebase/app'
import { auth, handleUserProfile } from './firebase/utils';
import React, { useEffect , useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Navbar, Products, Cart, Checkout } from './ecomm/components/index';
import { commerce } from './ecomm/lib/commerce';

  const App = () => {
    const [currentUser , setCurrentUser ] = useState(null);

    useEffect(() => {
      const authListener = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await handleUserProfile(userAuth);
          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          }) 
        }
  
        setCurrentUser(null);
      });
      return () => {
        authListener();
      };
    }, []);
    
    //----------------ecomm----------
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
      const { data: products} = await commerce.products.list();
      const { data: categoriesData} = await commerce.categories.list();
      
      const productPerCategory = categoriesData.reduce((acc, category) => {
        return [
        ...acc,
        {
          ...category,
          productsData : products.filter((product) => product.categories.find((cat) => cat.id === category.id)
         ),
      },
    ];
  },[]);


      setCategories(productPerCategory); 
    };
  
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };
  
    const handleAddToCart = async (productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity);
  
      setCart(item.cart);
    };
  
    const handleUpdateCartQty = async (lineItemId, quantity) => {
      const response = await commerce.cart.update(lineItemId, { quantity });
  
      setCart(response.cart);
    };
  
    const handleRemoveFromCart = async (lineItemId) => {
      const response = await commerce.cart.remove(lineItemId);
  
      setCart(response.cart);
    };
  
    const handleEmptyCart = async () => {
      const response = await commerce.cart.empty();
  
      setCart(response.cart);
    };
  
    const refreshCart = async () => {
      const newCart = await commerce.cart.refresh();
  
      setCart(newCart);
    };
  
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
      try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
  
        setOrder(incomingOrder);
  
        refreshCart();
      } catch (error) {
        setErrorMessage(error.data.error.message);
      }
    };
  
    useEffect(() => {
      fetchProducts();
      fetchCart();
    }, []);
  
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
//-------------------------

  return (
    <Router>
      <Switch>
         
        <Route exact path='/' render={() => ( <Home  refreshCart={refreshCart} currentUser={currentUser}/>)}/>
        <Route exact path='/recovery' component={RecoveryPage} />
        <Route exact path='/signin' render={() => currentUser ? <Redirect to="/" /> : (<SigninPage/>)}/>
        <Route path='/signup' render={() => currentUser ? <Redirect to="/" /> : (<SignupPage/>)}/>
        <Route exact path='/light' render={() => !currentUser ? <Redirect to="/signin" /> : (<Board/>)}/>
        <Route exact path='/yahtzee' render={() => !currentUser ? <Redirect to="/signin" /> : (<Game/>)}/>
        <Route exact path='/hangman' render={() => !currentUser ? <Redirect to="/signin" /> : (<Hangman/>)}/>
        
        <div >  
        <CssBaseline />
        {currentUser && <Navbar   totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />}
           <Route exact path="/Shop-e-wasool">
            <Products authok={currentUser} categories={categories} onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route exact path="/Shop-e-wasool/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
           <Route exact path="/Shop-e-wasool/checkout" >
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
            </Route>
          </div>
          
         </Switch>   
    </Router>
  );
}


export default App;
