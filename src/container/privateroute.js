import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
function mapStateToProps(state) {
    return { auth: state.auth }
}
class Privateroute extends Component {
    constructor(props) {
        super(props);
        this.check=this.check.bind(this)
    }
    check(props){
        if(window.localStorage.getItem("role") !=="admin" && props.match.path === "/admin")
        return  <Redirect
        to={{
        pathname: "/admin/signin",
        state: { from: props.location }
        }}
        />
        if(this.props.auth.user.role==="admin"&& props.match.path !== "/admin")
      return  <Redirect
      to={{
      pathname: "/admin",
      state: { from: props.location }
      }}
      />
      
      else
      return  <this.props.component {...props}  auth={this.props.auth}/>
    }
    render() {
        return (
                <Route 
                path={this.props.path} 
                render={(props) => this.props.auth.isAuthenticated === true ?
                     this.check(props)
                      : <Redirect
                        to={{
                        pathname: "/signin",
                        state: { from: props.location }
                        }}
                        />
                } />
            )}
}

export default connect(mapStateToProps)(Privateroute);
