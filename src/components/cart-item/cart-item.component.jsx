import React from 'react'

import { CartItemContainer, ItemDetailsContainer } from './cart-item.styles'

const CartItem = ({item}) => {
    const { imageUrl, name, price, quantity} = item;

    return(
        <CartItemContainer>
            <img src={imageUrl} className="image" alt="Cart Item" />
            <ItemDetailsContainer>
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x ${price}        
                </span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem
