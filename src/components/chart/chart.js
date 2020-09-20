import React from 'react';
import classes from './chart.module.css';

const chart = (props) => {
    let checked = '';
    console.log(props.checkedItems)
    if(props.checkedItems != null)
    {
         checked = props.checkedItems.map((element,index) => {
            return (
                <div key={index} className={classes.item}>
                <div className={classes.text}>{element.name}</div>
            <div className={classes.price}>{element.price}</div>
                <div className={classes.delete}>X</div>
            </div>
        )});
    }
    return (
        <div className={classes.chart}>
            <div className={classes.header}>
                Chart
            </div>

            <div className={classes.flex_column}>
               { props.display ? checked : ''}
        
            </div>

            <div className={classes.hr}>

            </div>
            <div className={classes.total__price}>
                Total Cost: <span>{props.display ? props.totalPrice : '0'}$</span>
            </div>

            <div className={classes.place__order}>
                <button type="button" onClick={() => props.onOrderAdd(props.checkedItems,props.totalPrice)} type="submit"> PLACE ORDER </button>
            </div>
        </div>
    )
}

export default chart;