import React, { Component } from 'react';
import { Card, Grid, Sidebar, Button, Image, Icon, Responsive, Segment, Menu, Header } from 'semantic-ui-react';
import './adminpanel.scss';
import { connect } from 'react-redux';
import Navbar from "../navbar/index";

class Adminpanel extends Component {
  render() {
    return (
      <div className="white dashboard">
        <Navbar {...this.props}/>
        <Grid>
          <Grid.Row className="x-padding">
            <Grid.Column computer="3">
              <Sidebar style={{ width: '17%' }} as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
                <Menu.Item style={{ marginTop: '4.6rem' }} as='a'>
                  <Icon name='user' />
                  Home
                </Menu.Item>
              </Sidebar>
            </Grid.Column>
            <Grid.Column computer="13">
              <Card.Group style={{ marginTop: '6rem' }}>
                <Card>
                  <Card.Content>
                    <Image floated="right" src="/images/steve.jpg" size="mini"/>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>With six years of experience</Card.Meta>
                    <Card.Description>
                      Steve wants to work with reptability as a <strong>Web developer</strong>
                    </Card.Description>
                    <Card.Description>
                      Signin method: <strong>Google</strong>
                    </Card.Description>
                    <Card.Description>
                      Profile status: <strong>Verified</strong>
                    </Card.Description>
                    <Card.Description>
                      Use signup timestamp <strong>April 4 2019 8:30 PM</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Verify
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image floated="right" src="/images/avatar.jpg" size="mini"/>
                    <Card.Header>Jennifer sandra</Card.Header>
                    <Card.Meta>With six years of experience</Card.Meta>
                    <Card.Description>
                      Steve wants to work with reptability as a <strong>Web developer</strong>
                    </Card.Description>
                    <Card.Description>
                      Signin method <strong>Facebook</strong>
                    </Card.Description>
                    <Card.Description>
                      Profile status <strong>Verified</strong>
                    </Card.Description>
                    <Card.Description>
                      Use signup timestamp <strong>April 4 2019 8:30 PM</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Verify
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image floated="right" src="/images/avatar.jpg" size="mini"/>
                    <Card.Header>James lawrence</Card.Header>
                    <Card.Meta>With six years of experience</Card.Meta>
                    <Card.Description>
                      Steve wants to work with reptability as a <strong>Web developer</strong>
                    </Card.Description>
                    <Card.Description>
                      Signin method <strong>Google</strong>
                    </Card.Description>
                    <Card.Description>
                      Profile status <strong>Verified</strong>
                    </Card.Description>
                    <Card.Description>
                      Use signup timestamp <strong>April 4 2019 8:30 PM</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Verify
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image floated="right" src="/images/avatar.jpg" size="mini"/>
                    <Card.Header>Nattew Samson</Card.Header>
                    <Card.Meta>With six years of experience</Card.Meta>
                    <Card.Description>
                      Steve wants to work with reptability as a <strong>Web developer</strong>
                    </Card.Description>
                    <Card.Description>
                      Signin method <strong>Email</strong>
                    </Card.Description>
                    <Card.Description>
                      Profile status <strong>Unverified</strong>
                    </Card.Description>
                    <Card.Description>
                      Use signup timestamp <strong>April 4 2019 8:30 PM</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Verify
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image floated="right" src="/images/avatar.jpg" size="mini"/>
                    <Card.Header>Simpson Sanders</Card.Header>
                    <Card.Meta>With six years of experience</Card.Meta>
                    <Card.Description>
                      Steve wants to work with reptability as a <strong>Web developer</strong>
                    </Card.Description>
                    <Card.Description>
                      Signin method <strong>Email</strong>
                    </Card.Description>
                    <Card.Description>
                      Profile status <strong>Unverified</strong>
                    </Card.Description>
                    <Card.Description>
                      Use signup timestamp <strong>April 4 2019 8:30 PM</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Verify
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Adminpanel)
