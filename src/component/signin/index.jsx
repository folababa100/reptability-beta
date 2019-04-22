import React, { Component } from 'react';
import { Grid, Card, Image, Button, Icon, Divider, Input, Form, Checkbox, Responsive } from 'semantic-ui-react';
import { Link ,Redirect} from 'react-router-dom'
import Fblogin from '../ui/sociallogin/fblogin';
import setAuthorizationToken from "../auth"
import jwt from "jsonwebtoken"
import axios from "axios"
import apiUrl from "../../config"
import "./signin.scss"
import Navbar from '../navbar';
import {connect} from "react-redux"
import Glogin from '../ui/sociallogin/googleLogin';

 class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      show: false,
      error: "",
      success: "",
      username: ""
    }
    this.login = this.login.bind(this)
    this.typing = this.typing.bind(this)
}
componentWillMount() {
   
}
login(e) {
    e.preventDefault();
    this.setState({ isLoading: true, error:"" })
    axios.post(`${apiUrl}/api/signin`,this.state).then((res) => {
            if (res.data.error) {
                this.setState({ ...this.state, error: res.data.error });
            } else if (res.data.token) {
                var userData = jwt.verify(res.data.token, "reptability")
                if (userData) {
                    var data = jwt.decode(res.data.token,"reptability");
                    localStorage.setItem("reptoken", res.data.token);
                    localStorage.setItem("email", data.email);
                    setAuthorizationToken(res.data.token);
                    window.location.assign(`/dashboard`)
                }
            }
            this.setState({ isLoading: false }) 
    }).catch((err) => {
            this.setState({ isLoading: false, error: "Please try again later. an error has occured" })
    })
}

typing(e,data) {
    var name= data.name;
    if(data.name=="tos"){
        this.setState({tos:data.checked})
    }
    else
    this.setState({
        [name]: data.value
    })
}
  onTogglePassword() {
    this.state.show === false ? this.setState({ show: true }) : this.setState({ show: false })
  }
  loading =()=>this.setState({isLoading:!this.state.isLoading})
  render() {
    return (
        window.localStorage.getItem("reptoken")? <Redirect
        to={{
        pathname: "/",
        state: { from: this.props.location }
        }}
        />:
      <div className="color-grey">
        <Grid container centered>
          <div className="signin-card">
            <Grid.Column>
              <Card style={{ width: '29rem', height: '100%', boxShadow: '1px 1px 11px 1px #d4d4d4' }}>
                <div style={{ marginTop: '1rem' }} className="card-container">
                  <Card.Content style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                  
                  <Responsive minWidth={968}>
                      <Image style={{ width: '5rem', height: '5rem' }} src="/images/Reptability123.png"/>
                    </Responsive>
                    <h2>
                      Welcome back
                    </h2>
                    <Fblogin loading={this.loading}/>
                    <Glogin loading={this.loading} />
                    <Form loading={this.state.isLoading} onSubmit={this.login}>
                  
                    <Divider horizontal>OR</Divider>
                        <Form.Field>
                      <Input className="mt-2 max-width" size="huge" placeholder='Email Address' type="email" name="email" onChange={this.typing}/>
                        </Form.Field>
                        <Form.Field>

                      <Input className="mt-2 max-width" size="huge" type="password" placeholder='Password' iconPosition="right" name="password" onChange={this.typing}>
                        {
                          this.state.show === false ? (
                            <input type="password" />
                          ) : (
                            <input type="text" />
                          )
                        }
                        
                        {
                          this.state.show === false ? (
                            <Icon onClick={() => this.onTogglePassword()} style={{ cursor: 'pointer', pointerEvents: 'all' }} name='eye' />
                          ) : (
                            <Icon onClick={() => this.onTogglePassword()} style={{ cursor: 'pointer', pointerEvents: 'all' }} name='eye slash' />
                          )
                        }
                      </Input>
                      </Form.Field>

                      <Form.Field className="fielder">
                        {/* <Checkbox label='Remember Me' /> */}
                        <Link>Forgot Password?</Link>
                      </Form.Field>
                      <Form.Field>
                          {this.state.error&&this.state.error}
                      </Form.Field>
                      <Button type="submit" color="black" className="signin-page-btn mt-2 max-width" size="huge" style={{ marginTop: '0.3rem', width: '100%' }}>Login</Button>
                    </Form>
                    <div className="link-to-other">
                      <Link to="/signup/employer">Not a member yet?</Link>
                    </div>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
          </div>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {auth: state.auth}
}
export default connect(mapStateToProps)(Signin)