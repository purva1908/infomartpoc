import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom';
import { logout, checkLogin ,checkout} from '../redux/userdata/UserAction';
import { useSelector, useDispatch } from 'react-redux';
import UserLoginScreen from '../screens/UserLoginScreen'
import ProductDetails from './ProductDetails';
import { useNavigate } from 'react-router-dom';

import Loader from './Loader';










const LoggedInUserMenu = ({ user }) => {


    var [error, setError] = React.useState(null);
    var [loading, setLoading] = React.useState(false);
    var navigate = useNavigate();
  
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }))
    }
    const checkoutUser = async (event) => {
      event.preventDefault();
      try {
        setError(null);
        setLoading(true);
        await checkout(inputs.email, inputs.name)(dispatch);
        return navigate("/payment");
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }
  


    return (
    
   

    <div className="container">
    <h1 className="text-center my-5">Checkout</h1>

       <div style={{ backgroundImage: "linear-gradient(pink,white)" }} className="alert alert-secondary border-0 h4 text-center bg-alert rounded-0" role="alert">
                    Order Information
       </div>
       <form onSubmit={checkoutUser} className="needs-validation" >
            <div className="form-row">
                 <div className="col-md-4 mb-3">
                 <label htmlFor="name">Name</label>
                 <input type="text" required  placeholder="Enter name" name="name"  className="form-control"  id="exampleInputEmail1"
             aria-describedby="emailHelp"  value={inputs.name || ""}
             onChange={handleChange} />
                 
             </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="email">Email</label>
                <input type="text"  required placeholder="Enter email" name="email"  className="form-control"  id="exampleInputEmail1"
             aria-describedby="emailHelp"  value={inputs.email || ""}
             onChange={handleChange} />
                
            </div>
             <div className="col-md-4 mb-3">
                 <label htmlFor="phoneno">Contact no</label>
                 <input type="text" required placeholder="enter your mobile no"  className="form-control"
                 id="exampleInputEmail1"/>
             </div>
           
            </div>
            <div className="form-row">
            <div className="col-md-4 mb-3">
                 <label htmlFor="phoneno">State</label>
                 <input type="text" required placeholder="enter your mobile no"  className="form-control"
                 id="exampleInputEmail1"/>
             </div>
             <div className="col-md-4 mb-3">
                 <label htmlFor="phoneno">City</label>
                 <input type="text" required placeholder="enter your city"  className="form-control"
                 id="exampleInputEmail1"/>
             </div>
             <div className="col-md-4 mb-3">
                 <label htmlFor="phoneno">Pincode</label>
                 <input type="text"  required placeholder="Enter pincode" name="pincode"  className="form-control"  id="exampleInputEmail1"
             aria-describedby="emailHelp"  
              />
                    </div>

            </div>
           
            <hr>
            </hr>
            <div className="form-row">
               <div className="col-md-12 mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control space" id="address" placeholder="please enter your town address . . ." required />
                  
                </div>
            </div>
            <div className="d-flex justify-content-center">
                       <button style={{backgroundImage:"linear-gradient(pink,white)",color:"black"}} type="submit">Submit Order Details & Proceed for Payment</button>
                    </div>
                    <Loader size={40} condition={loading} />
            <span className='text text-danger'> {error}</span>
                </form>
                
          
            </div>
  

    
    );
}




const Checkout = ({ }) => {
    const user = useSelector(s => s.user);

    const dispatch = useDispatch();
    useEffect(() => {
        checkLogin()(dispatch);
    }, []);

    return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown" data-toggle="collapse" data-target="#navbarSupportedContent">
                {user ? <LoggedInUserMenu user={user} /> : <UserLoginScreen />}
            </li>
            {/* <LoggedInUserMenu/> */}
        </ul>
    );
}

export default Checkout;