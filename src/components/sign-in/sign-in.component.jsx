import React,{ Component } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

/* import { signInWithGoogle } from '../../firebase/firebase.utils'; */

import { SignInContainer, ButtonsContainer } from './sign-in.styles'
import { emailSignInStart,googleSignInStart } from '../../redux/user/user.actions';

class SignIn extends Component{
    constructor(props){
        super(props);   

        this.state = {
            email    : '',
            password : ''
        } 
    }

    handleChange = (e) => {
        const {name,value} = e.target;

        this.setState({ [name]:value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const { emailSignInStart } = this.props;
        const { email,password } = this.state;

        emailSignInStart(email,password);
    }

    render(){
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>  
                    <FormInput
                     type="email"
                     name="email"  
                     value={this.state.email} 
                     handleChange={this.handleChange}
                     label="email"
                     required 
                     />
                    <FormInput
                     type="password" 
                     name="password" 
                     value={this.state.password}
                     handleChange={this.handleChange} 
                     label="password"
                     required 
                     />
                     <ButtonsContainer>
                        <CustomButton type="submit" value="Submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart}
                        googleSignIn
                        >Sign in with Google
                        </CustomButton>
                     </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart : (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn)
