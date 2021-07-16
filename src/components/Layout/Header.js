import React from 'react';
import mealImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

import HeaderCartButton from '../Layout/HeaderCartButton';

const Header = props => {
    return (
        <>
            <header className={classes.header} >
                <h1>{props.title}</h1>
                <HeaderCartButton title="Your Cart" />
            </header>
            <div className={classes['main-image']} >
                <img src={mealImage} />
            </div>
        </>
    )
}

export default Header;