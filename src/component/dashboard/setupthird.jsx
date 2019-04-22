import React, { Component } from 'react';
import { Popup ,Button, Grid,Embed,Header,Dimmer,GridColumn, Icon, Divider, Image, Input, Select, Form, Card, Responsive} from 'semantic-ui-react';
import Tabes from './tabes'


export default class Setupthird extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      active6: false,
      mon: '',
      tues: '',
      wed: '',
      thur: '',
      fri: '',
      sat: '',
      sun: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.handleClick4 = this.handleClick4.bind(this)
    this.handleClick5 = this.handleClick5.bind(this)
    this.handleClick6 = this.handleClick6.bind(this)
    this.typing = this.typing.bind(this)
  }
  handleClick() {
    this.setState({ active: !this.state.active })
  }
  handleClick1() {
    this.setState({ active1: !this.state.active1 })
  }
  handleClick2() {
    this.setState({ active2: !this.state.active2 })
  }
  handleClick3() {
    this.setState({ active3: !this.state.active3 })
  }
  handleClick4() {
    this.setState({ active4: !this.state.active4 })
  }
  handleClick5() {
    this.setState({ active5: !this.state.active5 })
  }
  handleClick6() {
    this.setState({ active6: !this.state.active6 })
  }
  typing(e, data) {
    var name= data.name;
    this.setState({
      [name]: data.value
    })
  }
  render() {
    return (
            <Form style={{ backgroundColor: 'white' }} size="large">
              <p className="text-center bolder">Add multiple day and time to show you are always avalaible</p>
              <Form.Group style={{ display: 'flex', justifyContent: 'center' }} widths='equal'>
                <Button.Group>
                  <Button name={this.state.active === true ? 'mon' : ''} toggle active={this.state.active} onClick={this.handleClick} className="btn-hover mr-02" basic color="blue">MON</Button>
                  <Button name={this.state.active1 === true ? 'tues' : ''} toggle active={this.state.active1} onClick={this.handleClick1} className="btn-hover mr-02" basic color="blue">TUES</Button>
                  <Button name={this.state.active2 === true ? 'wed' : ''} toggle active={this.state.active2} onClick={this.handleClick2} className="btn-hover mr-02" basic color="blue">WED</Button>
                  <Button name={this.state.active3 === true ? 'thur' : ''} toggle active={this.state.active3} onClick={this.handleClick3} className="btn-hover mr-02" basic color="blue">THUR</Button>
                  <Button name={this.state.active4 === true ? 'fri' : ''} toggle active={this.state.active4} onClick={this.handleClick4} className="btn-hover mr-02" basic color="blue">FRI</Button>
                  <Button name={this.state.active5 === true ? 'sat' : ''} toggle active={this.state.active5} onClick={this.handleClick5} className="btn-hover mr-02" basic color="blue">SAT</Button>
                  <Button name={this.state.active6 === true ? 'sun' : ''} toggle active={this.state.active6} onClick={this.handleClick6} className="btn-hover mr-02" basic color="blue">SUN</Button>
                </Button.Group>
              </Form.Group>
              <div className="available-btn">
                <Button color="blue" className="av-round">Add Avalability</Button>
              </div>
                
            </Form>
    )
  }
}
