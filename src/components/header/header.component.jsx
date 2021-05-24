import React from 'react'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './../../redux/user/user.selectors'
import { selectCartHidden } from './../../redux/cart/cart.selectors'
import { signOutStart } from '../../redux/user/user.actions'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

const Header = ({ currentUser,hidden,...otherProps }) => {
    const { signOutStart } = otherProps;

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
                        <OptionLink as='div' onClick={() => signOutStart()}>Sign Out</OptionLink>
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

const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
