import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    amount: 0
}

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems

        if (existingCartItem) {

            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        const updatedAmount = state.amount + action.item.price * action.item.amount;

        return ({
            items: updatedItems,
            amount: updatedAmount
        })
    }

    if (action.type === 'REMOVE') {
        const searchedItemIndex = state.items.findIndex(item => item.id === action.id);

        const searchedItem = state.items[searchedItemIndex];

        const updatedAmount = state.amount - searchedItem.price;

        let updatedItems;

        if (searchedItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {
                ...searchedItem,
                amount: searchedItem.amount - 1
            }
            updatedItems = [...state.items];
            updatedItems[searchedItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            amount: updatedAmount
        }

    }

    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item })
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    };

    const cartContext = {
        items: cartState.items,
        amount: cartState.amount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;