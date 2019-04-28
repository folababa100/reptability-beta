import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Certiupload from '../ui/certiupload';

export default class Setupnine extends Component {
  render() {
    return (
      <div>
        <Form style={{ backgroundColor: 'white' }} size="large">
          <Certiupload/>
        </Form>
        <p className="level-steps">9 of 10</p>
      </div>
    )
  }
}
