import React, {Component} from 'react';
import Home from './screens/home/Home.js';
import Details from './screens/details/Details.js';
import Checkout from './screens/checkout/Checkout.js';
import Header from './common/header/Header.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
    render(){
        return(
            <Router>
                <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/details" component={Details}/>
                <Route path="/checkout" component={Checkout}/>
                </div>
            </Router>
        )
    }
}

export default App;