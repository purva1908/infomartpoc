import React,{useEffect} from "react";
import ProductListItem from '../components/ProductListItem';
import { useSelector,useDispatch } from "react-redux";
import { getAllProducts } from "../redux/productdata/ProductAction";
import AsyncContainer from "../components/AsyncContainer";
function ProductListScreen(){
  const products=useSelector((state)=>state.products);
  console.log("list product",products);
  const dispatch=useDispatch();

  useEffect(()=>{
    //getAllProducts()(dispatch); //wihout middleware  
     dispatch(getAllProducts()); // with middleware
  },[dispatch]);


  return (
    <AsyncContainer model={products.length}>
    <div className="container">
    <div className="row">
      {products.map(product=><ProductListItem key={product.id} product={product}/>)}
    </div>
    </div>
    </AsyncContainer>
  )
}

export default ProductListScreen;