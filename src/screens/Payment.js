
import React, { useState } from "react";
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {emptyCart} from "../redux/cartdata/CartAction"; 


const Payment=({cartItem,user}) =>{

 const dispatch=useDispatch();


    return (
      <>

<div className="container-order-detail">
<h5>Select any payment method :</h5>
                  
                  <div className="row">
                      <div className="col">
                         <div className="card" style={{width: "18rem"}}>
                            <img src="./images/card.jpg" className="card-img-top" alt="card image"/>
                           <div className="card-body">
                           <h5 className="card-title"> Card</h5>
                            <p className="card-text">All types of card payment available at infoMart.You can use credit cart , debit card of your choice.</p>
                            <button style={{backgroundImage:"linear-gradient(pink,white)",color:"black"}}  onClick={()=>dispatch(emptyCart())} ><Link to="/confirm"  >Pay using card</Link></button>
                           </div>
                           </div>
                  
                       </div> 
                 
                       <div className="col">
                         <div className="card" style={{width: "18rem"}}>
                            <img src="./images/cod.jpg" className="card-img-top" alt="card image"/>
                            <div className="card-body">
                                  <h5 className="card-title"> Cash on Delievery</h5>
                                   <p className="card-text">We do not charge extra charges for cash on Delievery.So choose cash on Delievery  without any hesitation.</p>
                               <button  style={{backgroundImage:"linear-gradient(pink,white)",color:"black"}} onClick={()=>dispatch(emptyCart())}  ><Link to="/confirm"  >Confirm COD</Link></button>
                             </div>
                           </div>  
                       </div>  
                   </div>
      <h5>Order Details:</h5>
      <div className="float">
      <table id="shoppingCart" className="table table-condensed table-responsive">
                                    <thead>
                                   
                                        <tr>
                                            <th style={{ width: '50%' }}>Name:</th>
                                            <th style={{ width: '10%' }}>{user.name}</th>
                                            <th style={{ width: '10%' }} >Contact:</th>
                                            <th style={{ width: '10%' }} >{user.email}</th>
                                        </tr>
                                    </thead>
                                    {cartItem.addedItems.map(item =>
                                        <tbody>
                                            <tr>
                                                <td data-th="Product">
                                                    <div className="row">
                                                        <div className="col-md-3 text-left">
                                                            <img src={item.image} width={40} />
                                                        </div>
                                                        <div className="col-md-9 text-left mt-sm-2">
                                                            <h6>{item.title}</h6>
                                                            
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-th="Price">{item.price * item.quantity}</td>
                                                 
                                              
                     
                                            </tr>
                                        </tbody>
                                    )}
                                </table>
          <h4>Total:</h4>
           <h1 style={{color:"red"}}>({cartItem.addedItems.length} items) : ${Number(cartItem.total).toFixed(2)}</h1>
           
          </div>

        
      
     
       
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>         
        

      
        </div>     
                </>
        
);
}




const mapReduxStateToProps = reduxStore => {

  return {
      cartItem: reduxStore.cartItem,
      user:reduxStore.user,
  };
}

export default connect(mapReduxStateToProps)(Payment);
