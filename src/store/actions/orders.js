import * as actionTypes from './actionTypes';

export const addOrder = (items,totalprice) => {

    return {
        type: actionTypes.ADD_ORDER,
        items,
        totalprice,
        orderdate: new Date().toString()
    };
    
}


export const fetchOrders = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        orders  : orders
    };
}