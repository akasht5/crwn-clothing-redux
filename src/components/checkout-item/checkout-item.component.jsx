import React from 'react'

import { connect } from 'react-redux'
import { addItem,removeItem,clearItem } from '../../redux/cart/cart.actions'

import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles'

const CheckoutItem = ({item,addItem,removeItem,clearItem}) => {
    const { imageUrl,name,quantity,price } = item;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="Product"/>
            </ImageContainer>
            <TextContainer>
                {name}
            </TextContainer>
            <QuantityContainer>
                <div className="arrow" onClick={() => removeItem(item)}>
                    &#10094;
                </div>
                <span className="value">
                    {quantity}
                </span>
                <div className="arrow" onClick={() => addItem(item)}>
                    &#10095;
                </div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(item)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem : (item) => dispatch(addItem(item)),
    removeItem : (item) => dispatch(removeItem(item)),
    clearItem : (item) => dispatch(clearItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)
