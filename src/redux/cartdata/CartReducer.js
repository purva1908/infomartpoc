import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, REMOVE_FROM_CART,EMPTY_CART} from './Constants'

const initState = {
    addedItems: [],
    total: 0,
  };

export const cartItems= (state = initState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        let newItem = action.payload;
        let existing_item = state.addedItems.find((item) => {
          return item.id === newItem.id;
        });
        if (existing_item) {
          newItem.quantity += 1;
          return {
            ...state,
            total: state.total + newItem.price,
          };
        } else {
          newItem.quantity = 1;
          let newTotal = state.total + newItem.price;
          return {
            ...state,
            addedItems: [...state.addedItems, newItem],
            total: newTotal,
          };
        }

      case INCREMENT_QUANTITY:
        let objCopy = [...state.addedItems];
        let item = state.addedItems.find((item) => item.id === action.payload);
        objCopy[
          state.addedItems.findIndex((obj) => obj.id === action.payload)
        ].quantity += 1;
        let newTotal = state.total + item.price;
        return {
          ...state,
          addedItems: objCopy,
          total: newTotal,
        };

      case DECREMENT_QUANTITY:
        let objCop = [...state.addedItems];
  
        let foundItem = state.addedItems.find(
          (item) => item.id === action.payload
        );
        if (foundItem.quantity === 1) {
          let new_items = state.addedItems.filter(
            (item) => item.id !== action.payload
          );
          let newTotal = state.total - foundItem.price;
          return {
            ...state,
            addedItems: new_items,
            total: newTotal,
          };
        } else {
          objCop[
            state.addedItems.findIndex((obj) => obj.id === action.payload)
          ].quantity -= 1;
  
          let newTotal = state.total - foundItem.price;
          return {
            ...state,
            addedItems: objCop,
            total: newTotal,
          };
        }

        case REMOVE_FROM_CART:
        let needToRemove = state.addedItems.find(
          (item) => item.id === action.payload
        );
        let remainingItems = state.addedItems.filter(
          (item) => item.id !== action.payload
        );
        let newTotalAmount =
          state.total - needToRemove.price * needToRemove.quantity;
        return {
          ...state,
          addedItems: remainingItems,
          total: newTotalAmount,
        };

        case EMPTY_CART:
          return{
            ...state,
            addedItems:action.payload,
            total:0,
          };
      default:
        return state;
    }
  };
  