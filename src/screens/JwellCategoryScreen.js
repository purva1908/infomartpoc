import React from "react";
import Products from "../data/db";
export default function JwellCategoryScreen(){
    return(
        
        <div className="container-jwel" >  
        {Products.products.filter(product=>product.category==="jewelery").map((item,i)=>(
           <div className="row" key={i}>
               <div className="col">
               <p> {item.title}</p>
              <img src={item.image}  height="100px" width="100px"/>
              <hr style={{height:"12px",border:"0",boxShadow: "inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)"}}/>

               </div>
              
           </div>
    ))}
    
     </div>
    )
}