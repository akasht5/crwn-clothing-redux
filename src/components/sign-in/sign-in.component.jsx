import React,{ Component } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth,signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, ButtonsContainer } from './sign-in.styles'

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

        const { email,password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);

            this.setState({
                email : '',
                password : ''
            })

        } catch (error) {
            console.log('ERROR : ',error.message);
        }
    }


    render(){
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
                        <CustomButton type="button" googleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                     </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
    
}

export default SignIn
