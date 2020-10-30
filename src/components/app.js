import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Cookies from "js-cookie"
import { withRouter } from "react-router"

import Navbar from "../components/pages/resources/navbar"
import Homepage from "./pages/homepage"
import Auth from "./pages/login-signup"



class App extends Component {
  constructor() {
    super()

    this.state = {
      username: ""
    }

    // this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    this.handleSuccessfulSignOut = this.handleSuccessfulSignOut.bind(this)
  }

  handleSuccessfulSignOut() {
    this.setState({
      username: ""
    })
  }

  componentDidMount() {
    if (Cookies.get("username")) {
      this.setState({ username: Cookies.get('username') })

    }
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Navbar handleSuccessfulSignOut={this.handleSuccessfulSignOut} />
            <Switch>
              { Cookies.get("username") ? 
                <Redirect exact from="/" to="/messenger" />
              : <Route exact path="/" component={Homepage} /> }
              <Route path="/signup" render={propsFromRoute => <Auth authType="signup" {...propsFromRoute} />} /> 
              <Route path="/login" render={propsFromRoute => <Auth authType="login" {...propsFromRoute} />} />
              <Route path="/messenger" render={propsFromRoute => <Auth authType="login" {...propsFromRoute} />} />

            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default withRouter(App)