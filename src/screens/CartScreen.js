import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cartdata/CartAction';
import { Link } from 'react-router-dom';

function CartItemsScreen({ cartItem }) {

    const dispatch = useDispatch();

    console.log("cartpage", cartItem)
    return (
        <>
            {cartItem.addedItems.length > 0 ? (
                <section className="pt-5 pb-5">
                    <div className="container">
                        <div className="row w-100">
                            <div className="col-lg-12 col-md-12 col-12">
                                <h3 className="cart-head display-5 mb-2 text-center">Shopping Cart</h3>
                                <p className="mb-5 text-center">
                                    <span className="item-count">{cartItem.addedItems.length}</span> items in your cart</p>
                                <table id="shoppingCart" className="table table-condensed table-responsive">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '60%' }}>Product</th>
                                            <th style={{ width: '12%' }}>Price</th>
                                            <th style={{ width: '10%' }}>Quantity</th>
                                            <th style={{ width: '16%' }} />
                                        </tr>
                                    </thead>
                                    {cartItem.addedItems.map(item =>
                                        <tbody>
                                            <tr>
                                                <td data-th="Product">
                                                    <div className="row">
                                                        <div className="col-md-3 text-left">
                                                            <img src={item.image} width={70} />
                                                        </div>
                                                        <div className="col-md-9 text-left mt-sm-2">
                                                            <h4>{item.title}</h4>
                                                            <p className="font-weight-light">{item.category}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-th="Price">{item.price * item.quantity}</td>

                                                <td data-th="Quantity">
                                                    <FontAwesomeIcon icon={faMinus} onClick={() => dispatch(decrementQuantity(item.id))} />
                                                    {/* <input type="text" className="form-control form-control-sm text-center" defaultValue={1} /> */}
                                                    {item.quantity}
                                                    <FontAwesomeIcon icon={faPlus} onClick={() => dispatch(incrementQuantity(item.id))} />
                                                </td>
                                                <td className="actions" data-th>
                                                    <div className="text-right">
                                                        {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                <i className="fas fa-sync" />
                                            </button> */}
                                                        <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                            <FontAwesomeIcon className="animate__animated animate__bounce" icon={faTrash} onClick={() => dispatch(removeFromCart(item.id))}/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                </table>
                                <div className="float-right text-right">
                                    <h4>Subtotal:</h4>
                                    <h1>({cartItem.addedItems.length} items) : ${Number(cartItem.total).toFixed(2)}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 d-flex align-items-center">
                            <div className="col-sm-6 order-md-2 text-right">
                                <Link to="/checkout" className="btn btn-primary mb-4 btn-lg pl-5 pr-5" style={{backgroundImage:"linear-gradient(pink,white)",color:"black"}}>Checkout</Link>
                            </div>
                            <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                                <Link to="/">
                                    <i className="fas fa-arrow-left mr-2" /> Continue Shopping</Link>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <h1>Empty Cart</h1>
            )}
        </>
    )
}

const mapReduxStateToProps = reduxStore => {

    return {
        cartItem: reduxStore.cartItem
    };
}

export default connect(mapReduxStateToProps)(CartItemsScreen);