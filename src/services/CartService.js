import axios from './http';

class ProductListService{

    async getCartItems(){
        let response= await axios.get("https://fakestoreapi.com/products/");
        // console.log('getAllProducts response',response.data);
        return response.data;
    }
}

export default new ProductListService();

//we need same productdata which we wanted in productlist service thats why
//we fetched data now again and exported latest productlistservice