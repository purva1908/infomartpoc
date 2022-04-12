import React from 'react';
import { Link } from 'react-router-dom';





function OrderConfirmScreen() {

  const orderid=Math.floor((Math.random() * 10000) + 1);
  
  return (
    <div>
 <div className="hideMeAfter3Seconds container">
   <h3>Your Payment is in progress....</h3>
  <img  src="/images/ruppe.gif.crdownload" alt="paymentprocessing" height="30%" width="60%"/>
  </div>
     <div className="jumbotron">
  <h1 className="display-4">Hurrey!!!Your order  #{orderid} is successfully placed and confirmed!</h1>
  <p className="lead">Thank you for shopping.For more details you can check you email.</p>
  <hr className="my-4"/>
    <Link className="btn btn-primary btn-lg" to="/" style={{backgroundImage:"linear-gradient(#A63EC5,white)",color:"black"}}  role="button">Back to Home</Link>
    
</div>



    </div>
  )
}





export default OrderConfirmScreen;