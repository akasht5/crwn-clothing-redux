import React,{ Component } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-button.component'

import { auth } from '../../firebase/firebase.utils'
import { createUserProfileDocument } from '../../firebase/firebase.utils'

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

        const { displayName,email,password,confirmPassword } = this.state;
        
        if(password !== confirmPassword){
            alert('Passwords dont match !')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});

            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            });

        } catch (error) {
            console.log('ERROR : ',error.message);
        }
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

export default SignUp
