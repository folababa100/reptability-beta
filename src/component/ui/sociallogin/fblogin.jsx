import React, { Component} from 'react';
import { FacebookProvider, Login } from 'react-facebook';
import { Button, Icon } from 'semantic-ui-react';
import setAuthorizationToken from "../../auth"
import apiUrl from "../../../config.js"
import jwt from "jsonwebtoken"
import axios from "axios"

export default class Fblogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: ''
    }
  }
  componentWillMount() {
    const href = new URL(window.location.href);
    const userType = href.href.substring(29)
    this.setState({
      userType
    })
  }
  handleResponse = (data) => {
    var {email,name,picture} = data.profile;
    axios.post(`${apiUrl}/api/socialLogin`,{email,dp:picture.data.url,fullName:name, ...this.state}).then((res) => {
        if (res.data.token) {
            var userData = jwt.verify(res.data.token, "reptability")
            if (userData) {
                var data = jwt.decode(res.data.token,"reptability");
                localStorage.setItem("reptoken", res.data.token);
                localStorage.setItem("email", data.email);
                setAuthorizationToken(res.data.token);
                window.location.assign(`/confirm`)
            }
        }
        })
    this.props.loading();
  }
 
  handleError = (error) => {
    this.setState({ error });
    this.props.loading();
  }
 
  click = (e,handleClick)=>{
    this.props.loading();
    handleClick(e);
  }
  render() {
    return (
      <FacebookProvider appId="864596217227594">
        <Login
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          {({ loading, handleClick, error, data }) => (
             <Button disabled={loading} onClick={(e)=>this.click(e,handleClick)} color='facebook' size="large">
             <Icon style={{ color: '#fff' }} name='facebook' />  Facebook
           </Button>
          )}
        </Login>
      </FacebookProvider>
    );
  }
}