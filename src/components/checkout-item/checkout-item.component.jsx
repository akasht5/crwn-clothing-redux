import React from 'react'

import { connect } from 'react-redux'
import { addItem,removeItem,clearItem } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ({item,addItem,removeItem,clearItem}) => {
    const { imageUrl,name,quantity,price } = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Product"/>
            </div>
            <span className="name">
                {name}
            </span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(item)}>
                    &#10094;
                </div>
                <span className="value">
                    {quantity}
                </span>
                <div className="arrow" onClick={() => addItem(item)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => clearItem(item)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem : (item) => dispatch(addItem(item)),
    removeItem : (item) => dispatch(removeItem(item)),
    clearItem : (item) => dispatch(clearItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)
