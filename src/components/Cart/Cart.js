import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../stores/cart-context';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const Cart = (props) => {

    const cartCxt = useContext(CartContext);
    const totalAmount = `₹${cartCxt.amount.toFixed(2)}`;
    const hasItems = cartCxt.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartCxt.addItem({ ...item, amount: 1 })
    };

    const cartItemRemoveHandler = (id) => {
        cartCxt.removeItem(id);
    };

    const CartList = cartCxt.items.map(item => {
        return (
            <CartItem key={item.id} item={item} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)} />
        )
    })

    return (
        <Modal onClickCloseButton={props.onClickCloseButton} >
            <ul className={classes['cart-items']} >
                {CartList}
            </ul>
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions} >
                <button onClick={props.onClickCloseButton} className={classes['button--alt']} >Close</button>
                {hasItems && <button className={classes['button']} >Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;