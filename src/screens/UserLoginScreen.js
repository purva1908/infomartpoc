import React, { useState } from 'react';
import { login } from '../redux/userdata/UserAction';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';






const UserLoginScreen = ({ }) => {

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
  const loginUser = async (event) => {
    event.preventDefault();
    try {
      setError(null);
      setLoading(true);
      await login(inputs.email, inputs.password)(dispatch);
      return navigate("/");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }


  return (
    <div>
      <form onSubmit={loginUser}>
        <div className='container'>
          <div className="login-container">



            <input type="text" placeholder="Enter email" name="email"  className="form-control"  id="exampleInputEmail1"
             aria-describedby="emailHelp"  value={inputs.email || ""}
             onChange={handleChange} />

            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.</small>



            <input type="password" name="password"  className="form-control" 
            id="exampleInputPassword1" placeholder="Password" value={inputs.password || ""}
            onChange={handleChange} />


            <button type="submit" className="btn btn-primary">Login</button>
            <Loader size={40} condition={loading} />
            <span className='text text-danger'> {error}</span>
          </div>
        </div>
      </form>
    </div>
  )
}


export default UserLoginScreen;