import React, { Component } from 'react';
import { Form, Grid, Label, Icon, Modal, Button } from 'semantic-ui-react';
import Tabes from './tabes';
import apiUrl from "../../config.js"
import axios from 'axios';
import { connect } from 'react-redux';
import { addSkills } from '../../actions/app';

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
      error: ''
    }
    this.typing = this.typing.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addExperience = this.addExperience.bind(this)
  }
  typing(e, data) {
    var name= data.name;
    this.setState({
      [name]: data.value
    })
  }
  loading =()=>this.setState({isLoading:!this.state.isLoading})
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
            <div style={{ justifyContent: 'center', marginBottom: '4rem' }} className="flexbox">
              <Modal size="tiny" trigger={<Button color="blue">Add work experience</Button>}>
                <Modal.Content>
                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Input onChange={this.typing} name="employer" fluid label='Employer'/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                      <Form.Input onChange={this.typing} name="start" placeholder="e.g 2018" type="number" fluid label='Start'   />
                      <Form.Input onChange={this.typing} name="end" placeholder="e.g 2019" type="number"  fluid label='End'/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                      <Form.Input onChange={this.typing} name="title" fluid label="Title" />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.TextArea onChange={this.typing} name="responsibility" rows="10" label="Responsibilities & Accomplishments"/>
                    </Form.Group>
                    <Form.Group>
                      <Button basic color='red' content='Delete'/>
                      <Button onClick={this.addExperience} basic color='blue' content='Save'/>
                    </Form.Group>
                  </Form>
                </Modal.Content>
              </Modal>
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
