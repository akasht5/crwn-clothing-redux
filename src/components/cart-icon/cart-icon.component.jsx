import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { CartIconContainer, ShoppingIconContainer, ItemsCountContainer } from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden,itemsCount }) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
                <ShoppingIconContainer className="shopping-icon" />
                <ItemsCountContainer>{itemsCount}</ItemsCountContainer>
        </CartIconContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    itemsCount : selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
