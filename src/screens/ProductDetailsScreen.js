import React,{useEffect} from "react";
import ProductDetails from "../components/ProductDetails";
import { useParams} from "react-router-dom";
import AsyncContainer from "../components/AsyncContainer";
import { useSelector,useDispatch } from "react-redux";
import { getProductsById } from "../redux/productdata/ProductAction";

const ProductDetailsScreen=()=>{
    const productSelect = useSelector((s) => s.selectProduct);

    // console.log("selectedProduct", productSelect)

    const params = useParams();

    console.log("params", params)

    const dispatch = useDispatch();
   
    useEffect(()=>{
       getProductsById(params.id)(dispatch) ;
    },[params.id])

    return(
        <AsyncContainer model={productSelect} >
            <ProductDetails product={productSelect}/>
        </AsyncContainer>
    )

}

export default ProductDetailsScreen;