import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems,selectCartItemsTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import { CheckoutContainer,CheckoutHeaderContainer,HeaderBlockContainer,TotalContainer,TestWarningContainer } from './checkout.styles'

const CheckoutPage = ({ cartItems,cartItemsTotal }) => {
    return (
        <CheckoutContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span> 
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.length ? ( cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))
                ) : (
                    <span className="empty-cart">No items in your cart !</span>
                )
            }
            <TotalContainer>Total : ${cartItemsTotal}</TotalContainer>
            <TestWarningContainer>
                *Please use the following test credit card for payments*
                    <br />
                4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
            </TestWarningContainer>
            <StripeCheckoutButton price={cartItemsTotal} />
        </CheckoutContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartItemsTotal : selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage)

