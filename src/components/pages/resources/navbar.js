import React, { Component } from 'react';
import Cookies from "js-cookie";
import { withRouter } from "react-router";

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            
        }
    }

    handleSignOut() {
        Cookies.remove("username")
        props.handleSuccessfulSignout()
        props.history.push("/")
    }

    render() {
        return (
            <div className="navbar-wrapper">
               <h3 className="logo">Moody</h3> 
                { Cookies.get("username") ? 
                    <div className="user-info">
                        <h6>What's up {Cookies.get("username")}</h6>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                : null}
            </div>
        )
    }
}

export default Navbar