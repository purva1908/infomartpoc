import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, REMOVE_FROM_CART,EMPTY_CART} from 
'./Constants';


export const addToCart = (item) => {
    return {
      type: ADD_TO_CART,
      payload: item,
    };
  };

export const emptyCart=()=>{
  return{
    type:EMPTY_CART,
    payload:[],
  };
};
  
  export const incrementQuantity = (id) => {
    return {
      type: INCREMENT_QUANTITY,
      payload: id,
    };
  };
  
  export const decrementQuantity = (id) => {
    return {
      type: DECREMENT_QUANTITY,
      payload: id,
    };
  };

  export const removeFromCart = (id) => {
    return {
      type: REMOVE_FROM_CART,
      payload: id,
    };
  };
  