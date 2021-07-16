import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../stores/cart-context';

const MealItem = props => {

    const price = `₹${props.price.toFixed(2)}`

    const cartCxt = useContext(CartContext);

    const addToCart = (amount) => {
        const item = {
            id: props.id,
            title: props.title,
            price: props.price,
            amount: amount,
        }
        cartCxt.addItem(item);
    }

    return (
        <li className={classes.meal} >
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description} >{props.description}</div>
                <div className={classes.price} >{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCart} />
            </div>
        </li>
    )
}

export default MealItem;