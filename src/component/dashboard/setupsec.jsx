import React, { Component } from 'react';
import { Popup ,Button, Grid,Embed,Header,Dimmer,GridColumn, Icon, Divider, Image, Input, Select, Form, Card, Responsive} from 'semantic-ui-react';
import Tabes from './tabes'
import { Range, getTrackBackground } from 'react-range';
import apiUrl from "../../config.js"
import axios from 'axios';

const STEP = 1;
const MIN = 0;
const MAX = 100;

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
    var name= data.name;
    this.setState({
      [name]: data.value
    })
  }
  render() {
    return (
            <Form style={{ backgroundColor: 'white' }} size="large">
              <Form.Group widths='equal'>
                <Form.Input name="streetApt" onChange={this.typing} fluid label='Street Apt'   />
                <Form.Input name="homeAddress" onChange={this.typing} fluid label="Enter your home address"/>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input name="provinceState" onChange={this.typing} fluid label="Province/State"/>
                <Form.Input name="cityTown" onChange={this.typing} fluid label='City/Town'/>
              </Form.Group>
              <div className="flexbox">
                <p style={{ fontWeight: '600', color: '#555' }}>How far are you willing to travel</p>
                <Icon className="car-adjust" name="car"/>
              </div>
              <div>
                <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <Range
                      values={this.state.values}
                      step={STEP}
                      min={MIN}
                      max={MAX}
                      onChange={values => this.setState({ values })}
                      renderTrack={({ props, children }) => (
                        <div
                          onMouseDown={props.onMouseDown}
                          onTouchStart={props.onTouchStart}
                          style={{
                            ...props.style,
                            height: "36px",
                            display: "flex",
                            width: "100%"
                          }}
                        >
                          <div
                            ref={props.ref}
                            style={{
                              height: "5px",
                              width: "100%",
                              borderRadius: "4px",
                              background: getTrackBackground({
                                values: this.state.values,
                                colors: ["#548BF4", "#ccc"],
                                min: MIN,
                                max: MAX
                              }),
                              alignSelf: "center"
                            }}
                          >
                            {children}
                          </div>
                        </div>
                      )}
                      renderThumb={({ props, isDragged }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: "42px",
                            width: "42px",
                            backgroundColor: "#FFF",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "rgb(170, 170, 170) 0px 1px 3px",
                            outline: 'none',
                            borderRadius: '2rem'
                          }}
                        >
                          <div
                            style={{
                              height: "16px",
                              width: "5px",
                              backgroundColor: isDragged ? "#548BF4" : "#CCC"
                            }}
                          />
                        </div>
                      )}
                    />
                    <output className="distance" style={{ marginTop: "30px" }} id="output">
                      {parseInt(this.state.values[0])} mi
                    </output>
                  </div>
              </div>
            </Form>
    )
  }
}
