import React, { Component } from 'react';
import Navbar from '../navbar/index';
import './confirm.scss';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

class Confirm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div className="home-adjust">
        <Navbar {...this.props}/>
        <div className="body-adjust">
          <Grid centered container>
            <Grid.Column>
              <div>
                <h2 style={{ textAlign: 'center', marginTop: '4rem' }}>Verify your email to proceed</h2>
                <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                  We just sent an email to the address: {window.localStorage.getItem('email')}
                </p>
                <p style={{ textAlign: 'center', marginTop: '1rem' }}>Please check your email and click on the link provided to verify your address.</p>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {auth: state.auth}
}
export default connect(mapStateToProps)(Confirm)
