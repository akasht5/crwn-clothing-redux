import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from './../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from './../../redux/cart/cart.selectors'

import { CartDropdownContainer,CartItemsContainer,EmptyMessageContainer } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems,history,dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {   
                    cartItems.length ? (
                        cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))) : (
                            <EmptyMessageContainer>
                                Cart is Empty !
                            </EmptyMessageContainer>
                        )
                }
            </CartItemsContainer>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>Go To Checkout</CustomButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({ 
    cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
