import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react'

export default class Setupsix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active7: false,
      active8: false,
      active9: false,
      active10: false
    }
  }
  handleClick7() {
    this.setState({ active7: !this.state.active7 })
  }
  handleClick8() {
    this.setState({ active8: !this.state.active8 })
  }
  handleClick9() {
    this.setState({ active9: !this.state.active9 })
  }
  handleClick10() {
    this.setState({ active10: !this.state.active10 })
  }
  render() {
    return (
      <div>
        <Form style={{ backgroundColor: 'white' }}>
          <p className="text-center bolder">What is your highest level of education you have completed</p>
          <Form.Group style={{ display: 'flex', justifyContent: 'center' }}>
            <Button.Group>
              <Button name={this.state.active7 === true ? 'high school' : ''} toggle active={this.state.active7} onClick={this.handleClick7} className="btn-hover mr-02" basic color="blue">High School</Button>
              <Button name={this.state.active8 === true ? 'college' : ''} toggle active={this.state.active8} onClick={this.handleClick8} className="btn-hover mr-02" basic color="blue">College</Button>
              <Button name={this.state.active9 === true ? 'university' : ''} toggle active={this.state.active9} onClick={this.handleClick9} className="btn-hover mr-02" basic color="blue">University</Button>
              <Button name={this.state.active10 === true ? 'others' : ''} toggle active={this.state.active10} onClick={this.handleClick10} className="btn-hover mr-02" basic color="blue">Others</Button>
            </Button.Group>
          </Form.Group>
        </Form>
        <p className="level-steps">6 of 10</p>
      </div>
    )
  }
}
