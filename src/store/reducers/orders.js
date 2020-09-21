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
const  onAccordionChange = (state,action) => {
    return {orders: state.orders.map((item)=> {
        if(item.Id === action.order.Id)
           return {...item, accordion: !item.accordion}
        else return item;
    })
}
}
const reducer = (state = initialState, action) =>
{
    switch(action.type)  {
       case actionTypes.FETCH_ORDERS: return fetchOrders(state,action);
       case actionTypes.ACCORDION_UPDATE: return onAccordionChange(state,action);
       case actionTypes.ADD_ORDER: { 
        const order = {Id:state.orders.length + 1,items:action.items, totalprice: action.totalprice,orderdate: action.orderdate,accordion:false};   
       const newState = state.orders.push(order)
        return {...state,
                
            newState
                
           };
       }
       default: return state;
    }
}

export default reducer;