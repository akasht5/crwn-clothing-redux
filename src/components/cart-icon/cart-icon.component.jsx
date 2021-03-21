import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './cart-icon.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ toggleCartHidden,itemsCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">{itemsCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    itemsCount : selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
