import {UserActions} from './Constants';



export const userReducer = (user=null, action)=>{
        switch(action.type){

            case UserActions.LOGIN: 
                return action.payload;

            case UserActions.LOGOUT:
                return null;

                case UserActions.CHECKOUT:
                    return action.payload;
            
            case UserActions.REGISTER:
                return action.payload;

            default:
                return user;
        }
}
