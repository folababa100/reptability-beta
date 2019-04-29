import React, {Component} from 'react';
import { Grid, Card, Responsive, Form, Image, Checkbox, Input, Icon, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../signin/signin.scss"

export default class Employersignup extends Component {
  render() {
    return (
      <div className="color-grey">
        <Grid container centered>
          <div style={{ marginTop: '5rem' }} className="signin-card">
            <Grid.Column>
              <Card color="blue" style={{ width: '41rem', height: '100%', boxShadow: '1px 1px 11px 1px #d4d4d4', backgroundColor: '#f5f7f9' }}>
                <div style={{ marginTop: '1rem' }} className="card-container">
                  <Card.Content style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                    <Form>
                        <Form.Group style={{ marginBottom: '1.5rem', marginTop: '2rem' }} widths="equal">
                          <Form.Input size="large" placeholder="First Name*"/>
                          <Form.Input size="large" placeholder="Last Name*"/>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: '1.5rem' }} widths="equal">
                          <Form.Input size="large" placeholder="Work Email*"/>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: '1.5rem' }} widths="equal">
                          <Form.Input size="large" placeholder="Phone Number*"/>
                          <Form.Select size="large" placeholder="Job Title*"/>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: '1.5rem' }} widths="equal">
                          <Form.Input size="large" placeholder="Company Name*"/>
                          <Form.Select size="large" placeholder="Number of Employees"/>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: '1.5rem' }} widths="equal">
                          <Form.Input size="large" placeholder="Country"/>
                          <Form.Select size="large" placeholder="State/Regions*"/>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: '1.5rem' }} widths="equal">
                          <Form.Input size="large" type="password" placeholder="Password" />
                        </Form.Group>
                        <div style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                          <p>By signing in you agree to our<Link to="/privacy"> terms and services</Link></p>
                        </div>
                        <Button positive style={{ width: '100%', marginBottom: '2rem' }} size="large">Submit</Button>
                    </Form>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
          </div>
        </Grid>
      </div>
    )
  }
}