import React from 'react';
import { useSelector } from 'react-redux';





const ProductDetails =({product} )=> {
    console.log("detail data", product);
    const status=useSelector(s=>s.status);
    
    return (
        <div className="row">
             <div className="col col-4">
                <img src={product.image} alt={product.title} title={product.title} className="product-manage-cover"/>
               
            </div>
            <div className="col col-8">
                <h3 className="product-detail-head">{product.title}</h3>
               
                <hr />
                
                <ul className="prod-info">
                    <li>Price: ₹ {product.price}</li>
                    <li>Rating: {product.rating.rate} / 5</li>
                </ul>
                <h4 className="product-cate">{product.category}</h4>
                <h5 className="product-desc">Description</h5>
                <p className="description">{product.description}</p>
            </div>
           
        </div>
    )
};


export default ProductDetails;