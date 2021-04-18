import React from 'react'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './../../redux/user/user.selectors'
import { selectCartHidden } from './../../redux/cart/cart.selectors'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

const Header = ({ currentUser,hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/' >
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>Shop</OptionLink>
                <OptionLink to='/contact'>Contact</OptionLink>
                {
                    currentUser ? (
                        <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>
                    ) : (
                        <OptionLink to='/signin'>Sign In</OptionLink>
                    )
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? (
                    null
                ) : (
                    <CartDropdown />
                )
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header)
