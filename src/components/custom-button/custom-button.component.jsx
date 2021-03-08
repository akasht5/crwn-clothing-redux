import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children,googleSignIn,...otherProps }) => {
    return (
        <button className={`${googleSignIn ? 'googleSignIn' : '' } custom-button`} {...otherProps} >
            {children}
        </button>
    )
}

export default CustomButton
