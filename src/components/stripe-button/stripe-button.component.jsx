import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_51HxtSXDVXQX9nqQCcVPm2uFPTcbb67PmIw3MnlFB1cQekY88ypAbp2MELPzor0XTDPWtO6br9rxBio3PCERf3NhG005ISi9fFi'

    const onToken = token => {
        console.log({ token });
        alert("Your payment was successful !");
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        panelLabel='Pay Now'
        amount={stripePrice}
        token={onToken}
        stripeKey={publishableKey}
    />
    )   
}

export default StripeCheckoutButton