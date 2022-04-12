// how our products will render as listitem on main page
import React from "react";
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartdata/CartAction';
import { connect } from 'react-redux';



function ProductListItem(props) {
    return (
        <>
        
            <div className="col-lg-3 col-md-4">
              <div className="container-list">
               <Link  to={`/product/info/${props.product.id}`}>


                <img src={props.product.image} alt={props.product.title} className="grid-image"
                    title={props.product.title} width="100%" height="60%" />
                <h2  className="product-list-title">
                    {props.product.title}
                </h2>
                </Link>
              
                <button onClick={() => props.addToCartHandler(props.product)}  className="btn-list">Add to Cart</button>
                
            </div>

        </div>        
				
              

        </>
    )
}

function mapStateToProps(state) {
    return {
        // cartData: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCartHandler: (data) => {
            dispatch(addToCart(data))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem);