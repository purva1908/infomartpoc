export const ProductActions={
    PRODUCT_LIST:'PRODUCT_LIST' ,
    PRODUCT_SELECT:'PRODUCT_SELECT'
}

export const StatusActions={
    STATUS_SET:'STATUS_SET',
}

export const Status={
    STATUS_IDLE:'STATUS_IDLE',
    STATUS_WAITING:'STATUS_WAITING',
    STATUS_SUCCESS:'STATUS_SUCCESS',
    STATUS_ERROR:' STATUS_ERROR',
}


export const SUCCESS={type:StatusActions.STATUS_SET,payload:{status:Status.STATUS_SUCCESS}};
export const WAITING={type:StatusActions.STATUS_SET,payload:{status:Status.STATUS_WAITING}};
export const IDLE={type:StatusActions.STATUS_SET,payload:{status:Status.STATUS_IDLE}};

export const errorStatus=error=> {
    return {type:StatusActions.STATUS_SET, payload:{status:Status.STATUS_ERROR, error:error}}};