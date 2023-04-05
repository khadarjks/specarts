import React from 'react';
import './Head.css';
import { Link, Outlet } from 'react-router-dom';

function Head({add}) {
    // console.log(add);
    return (
        <div className="head">
      <div className="logo">
        <img src={require("./assets/specartslogo.jpg")} alt= "" width="100%"/>
    </div>
    <div className="title">
        <h2>spe<span>cart</span>s</h2>
    </div>
    <div className="inputbox">
        <input type="text" name="search" placeholder="What are you looking for"/>
    </div>
    <div className="searchicon">
        <i className="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className="track">
        <h6>Track Order</h6>
    </div>
    <div className="signin">
        <h6>Sign In & Sign Up</h6>
    </div>
    <div className="cart">
        <h6><Link to="/Cartpage">Cart<span>{add.length}</span></Link></h6>
        <Outlet/>
        
    </div>
    </div>

    );
  }
  
  export default Head;
  