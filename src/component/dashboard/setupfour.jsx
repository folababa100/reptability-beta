import React, { Component } from 'react';
import { Form, Grid, Label, Icon, Modal, Button } from 'semantic-ui-react';
import Tabes from './tabes';
import apiUrl from "../../config.js"
import axios from 'axios';
import { connect } from 'react-redux';
import { addSkills } from '../../actions/app';
import { optionsTime, STEP, MIN, MAX } from './optionTime';
import { Range, getTrackBackground } from 'react-range';

class Setupfour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
      employer: '',
      responsibility: '',
      title: '',
      loading: false,
      success: '',
      error: '',
      values: [0]
    }
    this.typing = this.typing.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addExperience = this.addExperience.bind(this)
  }
  typing(e, data) {
    var name = data.name;
    this.setState({
      [name]: data.value
    })
  }
  loading = () => this.setState({ isLoading: !this.state.isLoading })
  onSubmit(e) {
    e.preventDefault();
    axios.post(`${apiUrl}/api/setupfour`, this.state).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
  }
  addExperience() {
    this.props.addExperience({
      ...this.state
    })
  }
  render() {
    return (
      // <Form.Group>
      //   <Form.Field className="skills-set">
      //     <label>Skills</label>
      //     <div style={{ display: 'flex' }}>
      //       <Form.Input style={{ border: 'none' }} name="skill" onChange={this.typing} className="footer-form" placeholder="Add another skill" />
      //       <Button style={{ marginLeft: '1rem' }} color="blue" onClick={this.addExperience}>Add</Button>
      //     </div>
      //   </Form.Field>
      // </Form.Group>
      <div>
        <Form style={{ backgroundColor: 'white' }}>
          <Form.Group>
            <Form.Input onChange={this.typing} label="Postal Code" type="Number" />
          </Form.Group>
          <div className="flexbox">
            <p style={{ fontWeight: '600', color: '#555' }}>How far are you willing to travel</p>
            <Icon className="car-adjust" name="car" />
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
              <output className="distance" style={{ marginTop: "15px" }} id="output">
                {parseInt(this.state.values[0])} mi
                            </output>
            </div>
          </div>
        </Form>
        <p className="level-steps">4 of 10</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  workExperiences: state.workExperiences
})

const mapDispatchToProps = (dispatch) => ({
  addExperience: (workExperience) => dispatch(addSkills(workExperience))
})

export default connect(mapStateToProps, mapDispatchToProps)(Setupfour)
