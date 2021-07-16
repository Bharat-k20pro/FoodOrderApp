import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { onShowCart } from '../../App';
import CartContext from '../../stores/cart-context';

const HeaderCartButton = props => {

    const [btnIsHighlighted, setBtnHighlighted] = useState(false);

    const badgeUpdater = useContext(CartContext);

    const onClickCartButton = useContext(onShowCart);

    const numberOfCartItems = badgeUpdater.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    const { items } = badgeUpdater;

    let btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlighted(true);

        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button onClick={onClickCartButton} className={btnClasses} >
            <span className={classes.icon} ><CartIcon /></span>
            <span>{props.title}</span>
            <span className={classes.badge} >{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;