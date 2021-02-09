import React, { useEffect } from 'react'
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Check from './pages/Checkout';
import Login from './pages/Login';
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import Payment from './pages/Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
const promise = loadStripe("pk_test_51IIVzxJPrSHY4syS7GdOhoOtdxoHSdQcBZOO4TVnJttLa90x8u1wb8Oq76M3nltgee9oPgSFQb2ZG88Ugfijs5mV005dHnQ4Lp")

function App() {
  
  const [{},dispatch] = useStateValue()

  useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>{
           if(authUser){
            dispatch({
              type:"USER",
              user:authUser
            })

           }
           else {
             dispatch({
               type:"USER",
               user:null
             })
           }
      })
  },[])
  return (
    <div className="app">
      <Router>
     
      <Switch>
        <Route path="/login">
         <Login/>
        </Route>
        <Route path="/check">
        <Header/>
          <Check/>
        </Route>
        <Route path="/payment">
        <Header/>
        <Elements stripe={promise}>
        <Payment/>
          </Elements>
       
        </Route>
        <Route path="/">
        <Header/>
        <Home/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
