import React, { Component } from 'react'

import Header from "./components/header/header.component";
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Shop from './pages/shop/shop.component'
import Home from './pages/home/home.component'
import CheckoutPage from './pages/checkout/checkout.component'
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends Component{
  unsubscribeFromAuth = null;

  componentDidMount(){
      const { checkUserSession } = this.props;
      checkUserSession();
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    const { currentUser } = this.props;

    return (
      <div className="App">
          <Header />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signin' render={() => currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
              }
              />
              <Route path='/shop' component={Shop} />
              <Route exact path='/checkout' component={CheckoutPage} />
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
