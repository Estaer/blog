import React, { Component } from 'react';
import Logo from '../assets/logo.png';
import '../App.css';


class Header extends Component{
   render(){
       return (
            <div>
                <header className="header">
                    <a className="main" href="https://rauchg.com/">
                        <span className="home">
                        <img src={Logo} alt="logo" width="25" height="25"/>
                        rauchg.com
                        </span>
                    </a>
                    <nav>
                        <a className="source" href="https://github.com/rauchg/blog">Source</a>
                        <a className="follow" href="https://twitter.com/rauchg">Follow Me</a>
                    </nav>
                </header>
           </div>
       );
   }

}

export default Header;