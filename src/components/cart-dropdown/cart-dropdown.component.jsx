import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from './../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from './../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems,history,dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {   
                    cartItems.length ? (
                        cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))) : (
                            <span className="empty-message">
                                Cart is Empty !
                            </span>
                        )
                    
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ 
    cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
