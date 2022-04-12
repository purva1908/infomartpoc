import { StatusActions,Status } from "./CommonAction";

export const statusReducer=(status={status:Status.STATUS_IDLE},action)=>{
    switch(action.type){
        case StatusActions.STATUS_SET:
             return action.payload;

             default:
                 return status;
    }
}