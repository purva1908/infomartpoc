import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBook,faTimeline } from "@fortawesome/free-solid-svg-icons";
import Offers from './Offers';
import Review  from './Review';
export default function AppFooter() {
  return (
    <>
        {/* <Offers/>
        <Review/> */}
    <footer className='footer'>
       
           <img src="/images/logo.png" className="App-logo animate__animated animate__bounce" alt="logo"  />
         <h1 className='front-logo-name'>info<span className='logo-name'>Mart</span></h1>
        
       <p className='footer-info'>infoMart is one of the unique online shopping sites in India where fashion is accessible to all.
       Check out our new arrivals to view the latest designer clothing, footwear and accessories in the
      market. You can get your hands on the trendiest style every season in western wear. You can also 
      avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed
       with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season 
       sale is the ultimate experience when fashion gets unbelievably affordable.

     </p>
   <p><FontAwesomeIcon icon={faBook,faTimeline}/></p>
   <p className='copyright'> Copyright &copy; 2022 infoMart </p>
    </footer>
    </>
  )
}
