import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import { addOrder } from '../actions';

const initialState = {
    orders:[
        ],
       

}


const fetchOrders = (state,action) => {
    return state.orders
}

const reducer = (state = initialState, action) =>
{
    switch(action.type)  {
       case actionTypes.FETCH_ORDERS: return fetchOrders(state,action);
       case actionTypes.ADD_ORDER: { 
        const order = {items:action.items, totalprice: action.totalprice,orderdate: action.orderdate};   
       const newState = state.orders.push(order)
        return {...state,
                
            newState
                
           };
       }
       default: return state;
    }
}

export default reducer;