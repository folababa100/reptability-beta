import React, { Component } from 'react';
import { Form, Grid, Label, Icon, Modal, Button } from 'semantic-ui-react';

export default class Setupseven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active11: false,
      active12: false,
      active13: false,
      active14: false
    }
    this.handleClick11 = this.handleClick11.bind(this)
    this.handleClick12 = this.handleClick12.bind(this)
    this.handleClick13 = this.handleClick13.bind(this)
    this.handleClick14 = this.handleClick14.bind(this)
  }
  handleClick11() {
    this.setState({ active11: !this.state.active11 })
  }
  handleClick12() {
    this.setState({ active12: !this.state.active12 })
  }
  handleClick13() {
    this.setState({ active13: !this.state.active13 })
  }
  handleClick14() {
    this.setState({ active14: !this.state.active14 })
  }
  render() {
    return (
      <div>
        <Form style={{ backgroundColor: 'white' }}>
          <p className="text-center bolder">When are you avalaible for work</p>
          <Form.Group style={{ display: 'flex', justifyContent: 'center' }}>
            <Button.Group>
              <Button name={this.state.active11 === true ? 'weekends' : ''} toggle active={this.state.active11} onClick={this.handleClick11} className="btn-hover mr-02" basic color="blue">Weekends</Button>
              <Button name={this.state.active12 === true ? 'weekends and evenings' : ''} toggle active={this.state.active12} onClick={this.handleClick12} className="btn-hover mr-02" basic color="blue">Weekends and evenings</Button>
              <Button name={this.state.active13 === true ? 'anytime' : ''} toggle active={this.state.active13} onClick={this.handleClick13} className="btn-hover mr-02" basic color="blue">Anytime</Button>
              <Button name={this.state.active14 === true ? 'daytime' : ''} toggle active={this.state.active14} onClick={this.handleClick14} className="btn-hover mr-02" basic color="blue">Daytime</Button>
            </Button.Group>
          </Form.Group>
        </Form>
        <p className="level-steps">7 of 10</p>
      </div>
    )
  }
}
