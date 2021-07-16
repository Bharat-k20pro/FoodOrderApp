import classes from './CartItem.module.css';

const CartItem = (props) => {

    // const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes['cart-item']} >
            <div>
                <h3>{props.item.title}</h3>
                <div className={classes.summary} >
                    <span className={classes.price} >{props.item.price}</span>
                    <span className={classes.amount} >x{props.item.amount}</span>
                </div>
            </div>
            <div className={classes.actions} >
                <button onClick={props.onRemove} >-</button>
                <button onClick={props.onAdd} >+</button>
            </div>
        </li>
    )
}

export default CartItem;