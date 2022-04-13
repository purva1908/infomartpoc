import React from "react";
import Products from "../data/db";

export default function MenCategoryScreen(){
    return(
      
        <div className="container-men">  
        {Products.products.filter(product=>product.category==="men's clothing").map((item,i)=>(
           <div className="row" key={i}>
               <div className="col">
                {item.title}
              <img src={item.image} height="100px" width="100px" />
              <hr style={{height:"12px",border:"0",boxShadow: "inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)"}}/>

               </div>

           </div>
    ))}
     </div>
    )
}