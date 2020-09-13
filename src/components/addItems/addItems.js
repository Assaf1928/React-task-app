import React from 'react';
import classes from './addItems.module.css'
const addItems = (props) => {
  let items = ''
    if(props.items != null) {
     items = props.items.map((element,index) => {
        return (
            
        <div  key={index} className={classes.item}>
        <div>
        <input  value={element.name} data-tag={element.price} data-index={index} onChange={(e)=> props.addCheckItem(e)} type="checkbox"/> 
        <label>{element.name}</label>
        </div>
        
        <div className={classes.price}>
            {element.price}
        </div>
    </div>
    )});
        }
    return (
        <div className={classes.add__items}>
        <div className={classes.header}>
            Add Item
        </div>
        <div className={classes.list__container}>
        <div className={classes.search}>

            <input type="text" placeholder="Search..."/>
        </div>
        <div className={classes.items_list}>
        {items}
          
        </div>
        <div className={classes.add}>
        <button>
                  + Add to chart</button>
        </div>
        </div>
    </div>
    )
}
export default addItems;