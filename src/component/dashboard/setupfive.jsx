import React, { Component } from 'react';
import { Form, Grid, Label, Icon, Modal, Button } from 'semantic-ui-react';

export default class Setupfive extends Component {
  constructor(props) {
    super(props) 
    this.state = {
       modalOpen: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleOpen() {
    this.setState({
        modalOpen: true
    })
  }
  handleClose() {
    this.setState({
      modalOpen: false
    })
  }
  render() {
    return (
      <div>
        <Form style={{ backgroundColor: 'white' }}>
          <Form.Group>
            <Modal open={this.state.modalOpen} onClose={this.handleClose} size="tiny" trigger={<Button onClick={this.handleOpen} color="blue">Add work experience</Button>}>
              <Modal.Content>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input onChange={this.typing} name="employer" fluid label='Employer' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input onChange={this.typing} name="start" placeholder="e.g 2018" type="number" fluid label='Start' />
                    <Form.Input onChange={this.typing} name="end" placeholder="e.g 2019" type="number" fluid label='End' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input onChange={this.typing} name="title" fluid label="Title" />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea onChange={this.typing} name="responsibility" rows="10" label="Responsibilities & Accomplishments" />
                  </Form.Group>
                  <Form.Group>
                    <Button basic color='red' content='Delete' />
                    <Button basic color='blue' content='Save' />
                  </Form.Group>
                </Form>
              </Modal.Content>
            </Modal>
          </Form.Group>
        </Form>
        <p className="level-steps">5 of 10</p>
      </div>
    )
  }
}
