import React, { Component } from 'react';
import { Card, Grid, Sidebar, Button, Image, Icon, Responsive } from 'semantic-ui-react';
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
              <div className="left-grid-dash">
                <div className="h3-text">
                  <h3 style={{ textAlign: 'center' }}><Icon name="user outline"/> Users</h3>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column computer="13">
              <Card.Group style={{ marginTop: '6rem' }}>
                <Card>
                  <Card.Content>
                    <Image floated="right" src="/images/steve.jpg" size="mini"/>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Approve
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image src="/images/steve.jpg"/> 
                  </Card.Content>
                  <Card.Content>

                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image src="/images/steve.jpg"/> 
                  </Card.Content>
                  <Card.Content>

                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image src="/images/steve.jpg"/> 
                  </Card.Content>
                  <Card.Content>
                    
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image src="/images/steve.jpg"/> 
                  </Card.Content>
                  <Card.Content>
                    
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
