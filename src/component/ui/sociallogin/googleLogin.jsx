import React,{Component} from 'react'
import { Button,Icon } from 'semantic-ui-react'
import GoogleLogin from 'react-google-login';
import axios from "axios"
import setAuthorizationToken from "../../auth"
import apiUrl from "../../../config.js"
import jwt from "jsonwebtoken"
export default class Glogin extends Component{
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
    googleLogin = (data)=>{
        var {email,imageUrl} =data.profileObj
        console.log(data)
        axios.post(`${apiUrl}/api/socialLogin`,{email,dp:imageUrl,fullName:"", ...this.state}).then((res) => {
         if (res.data.token) {
             var userData = jwt.verify(res.data.token, "reptability")
             if (userData) {
                var data = jwt.decode(res.data.token,"reptability");
                localStorage.setItem("reptoken", res.data.token);
                localStorage.setItem("email", data.email);
                setAuthorizationToken(res.data.token);
                window.location.assign(`/dashboard`)
            }
         }
         })
    this.props.loading();

     }
     click = (e,handleClick)=>{
        this.props.loading();
        console.log(handleClick)
        handleClick();
      }
    render(){

    return (
        <GoogleLogin 
        render={renderProps => (
        <Button color="google plus" 
        size="huge"
        style={{ width: '100%' }}
        onClick={renderProps.onClick}
            ><Icon name="google plus" />              Continue with Google</Button>
        )}
        clientId="494659809733-gc73dt5l9f3bmodml1crt73she8rvtaf.apps.googleusercontent.com"
        buttonText="Login"
        // secret XPZZME2BFZmTSvLmc8huJ6an
        onSuccess={(data)=>this.googleLogin(data)}
        onFailure={(data)=>{
            this.setState({error:"An error has occured"})
            // this.props.isLoading();
            console.log(data)
        }
        }/>
    )
}
}

