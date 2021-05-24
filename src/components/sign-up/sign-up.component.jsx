import React,{ Component } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/user.actions'

import { SignUpContainer } from '../sign-up/sign-up.styles'

class SignUp extends Component{
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleChange = (e) => {
        const { name,value } = e.target;

        this.setState({ [name]:value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { signUpStart } = this.props;

        const { displayName,email,password,confirmPassword } = this.state;
        
        if(password !== confirmPassword){
            alert('Passwords dont match !')
            return
        }

        signUpStart({email,password,displayName});
    }

    render(){
        return (
            <SignUpContainer>
                <h2>Don't have an account</h2>
                <span>Sign Up with email and password</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput 
                type="text"
                name="displayName"
                value={this.state.displayName}
                onChange={this.handleChange}
                label="name"
                required
                />
                <FormInput 
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                label="email"
                required
                />
                <FormInput 
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                label="password"
                required
                />
                <FormInput 
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                label="confirmPassword"
                required
                />
                <CustomButtom type="submit">Sign Up</CustomButtom>
                </form>
            </SignUpContainer>
        )
    } 
}

const mapDispatchToProps = dispatch => ({
    signUpStart : (email,password) => dispatch(signUpStart(email,password))
})

export default connect(null,mapDispatchToProps)(SignUp)
