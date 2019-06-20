import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import Logo from '../../assets/logo.png';

class Header extends Component {
    render(){
        return(
            <div>
             <img className="Logo" src={Logo} alt="logo"/>
                <ul className="menu-ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/details">Details</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>                  
                </ul>
            </div>    
        )
    }
}

export default Header;