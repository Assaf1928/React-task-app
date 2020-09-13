import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from './Orders.module.css';
import * as actions from '../../store/actions/index'

class Orders extends Component {


    render(){
        let data = "";
        console.log(this.props.orders)
        if(this.props.orders != '')
        {
            data = this.props.orders.map((element,index) => {
            
                return (
                    <div key={index} className={classes.orders_container}>
                    <div className={classes.order}>
                        <div className={classes.header}>
                            Order Number {index + 1} <span>({element.items.length} Items)</span>
                            <p className={classes.date}>{element.orderdate}</p>
                        </div>
                        <div className={classes.items_list}>
                            {element.items.map((item,index)=> {
                                return ( <div className={classes.item}>
                                 <div className={classes.text}>{item.name}</div>
                                 <div className={classes.price}>{item.price}</div>
                             </div> )
                            })}
                        
                        </div>
                        <div className={classes.total_cost}><p>Total Cost: <span>{element.totalprice}</span></p></div>
                    </div>
    
                    </div>
            )});
        }
     
        return(  <div className={classes.container}>
                <div className={classes.title}>
                MyOrders
                </div>

                <div className={classes.orders_container}>
                    {data}
    
                </div>

        </div> )
        
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders
    };
  }
  const mapDispatchToProps = dispatch => {
    return {
        onOrderAdd : (items,totalPrice) => dispatch(actions.addOrder(items,totalPrice)),
        }
  }
  

  export default connect(mapStateToProps, mapDispatchToProps)(Orders);
