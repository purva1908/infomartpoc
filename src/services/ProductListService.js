import axios from "axios";
// import axios from "./http";
class ProductListService{
    constructor(){
        this.products=[];

    }

    async getAllProducts(){
        let response=await axios.get("https://fakestoreapi.com/products");
        // let response=await axios.get("products");
        console.log('getAllProducts response',response);
        return response.data;
    }

    async getProductsById(id){
        let response=await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log('getproductbyid working in services',response.data);
        return response.data;
    }
}

export default new ProductListService();