import React, { Component } from 'react'

import Header from "./components/header/header.component";
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Shop from './pages/shop/shop.component'
import Home from './pages/home/home.component'
import { auth,createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component{
  constructor(){
      super();

      this.state = {
        currentUser : null
      }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
            const userRef = await createUserProfileDocument(userAuth);
            
            userRef.onSnapshot((snapShot) => {
              this.setState({currentUser : {
                id: snapShot.id,
                ...snapShot.data()
              }
              });
            });

        }
        this.setState({ currentUser:userAuth });
      });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' render={() => this.state.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUp />
            )
            }
            />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/shop/:collection' />
        </Switch>
    </div>
    );
  }
}

export default App;
