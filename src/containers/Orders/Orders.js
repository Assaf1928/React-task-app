import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from './Orders.module.css';
import * as actions from '../../store/actions/index'
import Accordion from 'react-bootstrap';

class Orders extends Component {


    componentDidMount() {
        console.log('rendering')
    }
    
    render(){
        let data = "";
   
            data = this.props.orders.map((element,index) => {
                let Styling;
                element.accordion ? Styling  = {
                    
                    backgroundColor: '#06090e',
                    border: '1px solid #1f242d'
                } : Styling ={}

                return (
                    
                    
                    <div key={index} className={classes.orders_container}>
                    <div className={classes.order} style={Styling} >
                        <div onClick={() => this.props.onAccordionChange(element)} className={classes.header}>
                          <p>  Order Number  {index + 1} <span>({element.items.length} Items)</span> </p>
                            <p className={classes.date}>{element.orderdate}</p>
                        </div>
                        <div className={classes.body} style={{display: element.accordion ? 'block' : 'none'}}>
                         <div className={classes.items_list}>
                            {element.items.map((item,index)=> {
                                return ( <div key={index} className={classes.item}>
                                 <div className={classes.text}>{item.name}</div>
                                 <div className={classes.price}>{item.price}$</div>
                             </div> )
                            })}
                        
                        </div> 
                        
                        <div className={classes.total_cost}><p>Total Cost: <span>{element.totalprice}$</span></p></div>
                    </div>
                    </div>       
                    </div>
            )});
        
     
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
        onAccordionChange: (order)=>dispatch(actions.onAccordionChange(order))
    }
  }
  

  export default connect(mapStateToProps, mapDispatchToProps)(Orders);
