import React, { Component } from 'react';
import { Form, Button } from "semantic-ui-react";

export default class Setupten extends Component {
  render() {
    return (
      <div>
        <Form style={{ backgroundColor: 'white' }} size="large">
          <Form.Group>
            <Button primary size="huge">Submit your profile</Button>
            
          </Form.Group>
          <Form.Group style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ textAlign: 'center', fontWeight: '600' }}>Let the world see your awesome profile</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            
              <Button circular color='facebook' icon='facebook' />
              <Button circular color='twitter' icon='twitter' />
              <Button circular color='linkedin' icon='linkedin' />
              <Button circular color='google plus' icon='google plus' />
            </div>
          </Form.Group>
        </Form>
        <p className="level-steps">10 of 10</p>
      </div>
    )
  }
}
