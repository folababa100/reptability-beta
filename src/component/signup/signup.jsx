import React, { Component } from 'react';
import { Grid, Card, Image, Button, Icon, Divider, Input, Form, Segment, Responsive } from 'semantic-ui-react';
import { Link,Redirect } from 'react-router-dom';
import "./signup.scss"
import Fblogin from '../ui/sociallogin/fblogin';
import {connect} from "react-redux"
import axios from "axios"
import jwt from "jsonwebtoken"
import apiUrl from "../../config.js"
import setAuthorizationToken from "../auth"
import Glogin from '../ui/sociallogin/googleLogin';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tos:false,
      username: "",
      show: false,
      password: "",
      email:"",
      isLoading: false,
      error: "",
      success: "",
      showPassword: false,
      activeText: "",
      activesText: "",
      active: "",
      actives: "",
      userType: ''
    }
    this.signup = this.signup.bind(this)
    this.typing = this.typing.bind(this)
}
  onTogglePassword() {
     this.setState({ show: !this.state.show }) 
  }
  handleClick(){this.setState({ active: !this.state.active, actives: false, activeText: 'employer', activesText: "" })};
  handleClickSecond(){this.setState({ actives: !this.state.actives, active: false, activesText: 'worker', activeText: "" })}
  loading =()=>this.setState({isLoading:!this.state.isLoading})
  signup(e) {
    e.preventDefault();
    var rID = window.localStorage.getItem("r");
    this.setState({ isLoading: true, error:"" ,success:""})
    axios.post(`${apiUrl}/api/signup`,{...this.state,rID}).then((res) => {
         if (res.data.token) {
            var userData = jwt.verify(res.data.token, "reptability")
            if (userData) {
                var data = jwt.decode(res.data.token,"reptability");
                localStorage.setItem("reptoken", res.data.token);
                localStorage.setItem("email", data.email);
                setAuthorizationToken(res.data.token);
                window.location.assign(`/confirm`)
            }
        }else  {
                this.setState({  error: res.data.error ,isLoading:false});
            }
    }).catch((err) => {
            this.setState({ isLoading: false, error: "Please try again later. an error has occured" })
    })
}
  typing(e,data) {
    var name= data.name;
    this.setState({
      [name]: data.value
    })
  }
  componentWillMount() {
    const href = new URL(window.location.href);
    const userType = href.href.substring(29)
    this.setState({
      userType
    })
  }
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
          <div className="signup-card">
            <Grid.Column>
              <Card style={{ width: '29rem', height: '100%', boxShadow: '1px 1px 11px 1px #d4d4d4' }}>
                <div style={{ marginTop: '1rem' }} className="card-container">
                  <Card.Content style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                    <Responsive minWidth={968}>
                      <Image style={{ width: '5rem', height: '5rem' }} src="/images/Reptability123.png"/>
                    </Responsive>
                    <h2>
                      Sign Up to employ
                    </h2>
                    <Fblogin loading={this.loading}/>
                    <Glogin loading={this.loading} />

                    <Divider horizontal>OR</Divider>
                    <Form loading={this.state.isLoading} onSubmit={this.signup}>
                    <Form.Field>
                      <Input className="mt-2 max-width" required size="huge" placeholder='Email Address' type="email" name="email" onChange={this.typing}/>
                    </Form.Field>
                    <Form.Field>
                      <Input className="mt-2 max-width" required size="huge" placeholder='Username' type="text" name="username" onChange={this.typing} />
                    </Form.Field>
                    <Form.Field>

                      <Input className="mt-2 max-width" required size="huge" type="password" placeholder='Password' iconPosition="right" name="password" onChange={this.typing}>
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
                        <Link to="/signup/worker">Signup to work instead</Link>
                      </Form.Field>
                      <Form.Field>
                          {this.state.error&&this.state.error}
                      </Form.Field>
                      <Button type="submit" color="black" size="huge" style={{ marginTop: '0.3rem', width: '100%' }}>Sign Up</Button>
                    </Form>
                    <div className="link-to-other">
                      <Link to="/signin">Already a member?</Link>
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

export default connect(mapStateToProps)(Signup)
