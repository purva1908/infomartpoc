import React from "react";

 import Membership from './Membership';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCartShopping ,faHeart,faHome} from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from 'react-redux';




const AppHeader = ({cartItem}) => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand logo-name" href="#" >
       
          <img src="/images/logo.png" className="App-logo" alt="logo" />
          <span className="front-logo-name">info</span>Mart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome}/><span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
            
              <Link className="nav-link" to="/cart/info">
               
                <FontAwesomeIcon icon={faCartShopping} />
               
                <span className="add-to-cart" style={{ color:"black",font:"bold"}}>
                   {cartItem.addedItems.length>0?cartItem.addedItems.length:null} 
                  {/* {!navigate("/payment") && cartItem.addedItems.length>0?cartItem.addedItems.length:null} */}
                  </span>
                
               
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/">
               
                <FontAwesomeIcon icon={faHeart} />
               
               
               
              </Link>
            </li>
            <li className="nav-item">
              <Membership/>
            </li>
            
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}

       
         
        </div>
      </nav>
   
    </div>
  );
  
}
const mapReduxStateToProps= reduxStore=>{

  return {
      cartItem:reduxStore.cartItem
  }
}

  export default connect(mapReduxStateToProps)(AppHeader);
