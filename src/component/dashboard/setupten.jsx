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
        </Form>
        <p className="level-steps">10 of 10</p>
      </div>
    )
  }
}
