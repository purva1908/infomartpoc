
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

import ProductListScreen from './screens/ProductListScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import UserLoginScreen from './screens/UserLoginScreen';
import CartScreen from './screens/CartScreen';
import Checkoutt from './components/Checkoutt';
import Payment from './screens/Payment';
import OrderConfirmScreen from './screens/OrderConfirmScreen';
import MenCategoryScreen from './screens/MenCategoryScreen';
import WomenCategoryScreen from './screens/WomenCategoryScreen';
import JwellCategoryScreen from './screens/JwellCategoryScreen';
import GadgetCategoryScreen from './screens/GadgetCategoryScreen';
import Offers from './components/Offers';
import Review from './components/Review';
import Search from './components/Search';
function App(){

return(
<div > 
<Router>

<AppHeader/>
<div className='screen container'>
  <Routes>
  <Route path="/" element={<ProductListScreen/>} ></Route>
  <Route path="/product/info/:id" element={<ProductDetailsScreen/>}></Route>
  <Route path="/login" element={<UserLoginScreen/>}></Route>
  <Route path='/cart/info' element={<CartScreen/>}></Route>
  <Route path="/checkout" element={<Checkoutt />} />
  <Route path="/payment" element={<Payment/>}></Route>
  <Route path="/confirm" element={<OrderConfirmScreen/>}></Route>
  
  <Route path="/search" element={<Search/>}></Route>
  <Route path="/category/men" element={<MenCategoryScreen/>}></Route>
  <Route path="/category/women" element={<WomenCategoryScreen/>}></Route>
  <Route path="/category/jwell" element={<JwellCategoryScreen/>}></Route>
  <Route path="/category/gadget" element={<GadgetCategoryScreen/>}></Route>

                  {/* <Route path="/" element={<Navigate to="/product/list" />} /> */}

                  <Route path="*" element={<NotFoundScreen />} />
             

  </Routes>
</div>
<Offers/>
<Review/>
<AppFooter />

</Router>
</div>
);
}
export default App;
