export const addItemToCart = (cartItems,cartItemToAdd) => {
    //Find if the cartItemToAdd exist or not
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id )
    
    //If exists increase quantity by 1
    if(existingCartItem){
        return cartItems.map(item => item.id === cartItemToAdd.id ? {...item,quantity:item.quantity + 1 } : item)
    }

    //If doesn't exist assign the quantity to 1
    return [...cartItems,{...cartItemToAdd, quantity:1 }]
    
}

export const removeItemFromCart = (cartItems,cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === existingCartItem.id ? {...cartItem,quantity:cartItem.quantity - 1} : cartItem)

}