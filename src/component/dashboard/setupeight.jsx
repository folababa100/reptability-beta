import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Profilepics from '../ui/profilepics'

export default class Setupeight extends Component {
  render() {
    return (
      <div>
        <Form style={{ backgroundColor: 'white' }} size="large">
          <Profilepics/>
        </Form>
        <p className="level-steps">8 of 10</p>
      </div>
    )
  }
}
