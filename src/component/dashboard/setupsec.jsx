import React, { Component } from 'react';
import { Popup, Button, Grid, Embed, Header, Dimmer, GridColumn, Icon, Divider, Image, Input, Select, Form, Card, Responsive } from 'semantic-ui-react';
import Tabes from './tabes'
import { Range, getTrackBackground } from 'react-range';
import apiUrl from "../../config.js"
import axios from 'axios';

export default class Setupsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [0],
      streetApt: '',
      homeAddress: '',
      provinceState: '',
      cityTown: ''
    }
    this.typing = this.typing.bind(this)
  }
  onSubmit(e) {
    e.preventDefault();
    axios.post(`${apiUrl}/api/setupsec`, this.state).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
  }
  typing(e, data) {
    var name = data.name;
    this.setState({
      [name]: data.value
    })
  }
  render() {
    return (
      <div>
        <Form style={{ backgroundColor: 'white' }} size="large">
          <Form.Group widths='equal'>
            <Form.Input name="streetApt" onChange={this.typing} fluid label='First Name' />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input name="provinceState" onChange={this.typing} fluid label="Last Name" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input name="provinceState" onChange={this.typing} fluid label="Phone Number" />
          </Form.Group>
        </Form>
        <p className="level-steps">2 of 10</p>
      </div>
    )
  }
}
