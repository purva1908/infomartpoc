import { ProductActions} from "./CommonAction";

export const ProductReducer=(products=[],action)=>{
    switch(action.type){
        case ProductActions.PRODUCT_LIST:
            return action.payload;

            default:
                return products;
    }
}

//This reducer handles a selected book only
export const SelectedProductReducer=(product=null, action)=>{

    switch(action.type){
        case ProductActions.PRODUCT_SELECT:  //{type: BookActions.BOOK_SELECT, payload:one_book_or_null}
            return action.payload;
        default:
            return product;
    }
}