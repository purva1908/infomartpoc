import { ProductActions,SUCCESS,WAITING,errorStatus } from "./CommonAction";

import ProductListService from "../../services/ProductListService";

// export const getAllProducts=()=>async(dispatch)=>{
//     try{
//         dispatch(WAITING);
//         const payload=await ProductListService.getAllProducts();
//         dispatch(SUCCESS);
//         dispatch({type:ProductActions.PRODUCT_LIST,payload});
//     }

//     catch(error){
//         dispatch(errorStatus(error));
//     }
// }

export const getAllProducts = ()=>{
    return {type:ProductActions.PRODUCT_LIST, payload:ProductListService.getAllProducts()};
}

export const getProductsById = (id) => async (dispatch) => {
    try {
        dispatch(WAITING);
        const payload = await ProductListService.getProductsById(id);
         console.log(payload);
        dispatch(SUCCESS);
        dispatch({ type: ProductActions.PRODUCT_SELECT, payload });
    } catch (error) {
        dispatch(errorStatus(error));
    }
}