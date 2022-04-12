import {UserActions} from './Constants';
import service from '../../services/UserService';

export const login= (email,password) => async (dispatch) =>{
    console.log("actioncreator", email,password)
    var user = await service.login(email,password);
    
    dispatch({type:UserActions.LOGIN, payload:user});
}

export const logout= () => async(dispatch)=>{
    await service.logout();
    dispatch({type:UserActions.LOGOUT});
}

export const checkLogin = ()  =>async(dispatch)=>{
    let user =await service.getLoggedInUser();
    
    dispatch({type:UserActions.LOGIN, payload:user}) ;
}


export const checkout= (email,name) => async (dispatch) =>{
    console.log("actioncreator", email,name)
    var user = await service.checkout(email,name);
    
    dispatch({type:UserActions.CHECKOUT, payload:user});
}


export const register= (email,pincode,no) => async (dispatch) =>{
    console.log("actioncreator", email,pincode,no)
    var user = await service.register(email,pincode,no);
    
    dispatch({type:UserActions.REGISTER, payload:user});
}