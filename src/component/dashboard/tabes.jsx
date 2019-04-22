import React, { Component } from 'react';
import { Grid, Label } from 'semantic-ui-react';

export default class Tabes extends Component {
  // onSwitch(event, ctyName) {
  //   let i, tabcontent, tablinks;
  //   tabcontent = document.getElementsByClassName('x-tabs')
  //   for(i = 0; i < tabcontent.length;i++) {
  //     tabcontent[i].style.display = 'none'
  //   }

  //   tablinks = document.getElementsByClassName('x-links');
  //   for(i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className.replace(' black', '')
  //   }
  //   document.getElementById(ctyName).style.display = "block !important";

  //   event.currentTarget.className += " active";
    
  // }
  // componetWillMount() {
  //   document.getElementById('defaultOpen').click()
  // }
  render() {
    return (
      <Grid columns="4">
        <Grid.Row className="xstep">
          <Grid.Column>
            {/* eslint-disable-next-line */}
            <Label id="defaultOpen" className="x-links" circular color="blue" >1</Label>
            Profile
          </Grid.Column>
          <Grid.Column>
            {/* eslint-disable-next-line */}
            <Label className="x-links" circular color="grey" >2</Label>
            Location
          </Grid.Column>
          <Grid.Column>
            {/* eslint-disable-next-line */}
            <Label className="x-links" circular color="grey" >3</Label> 
            Availability
          </Grid.Column>
          <Grid.Column>
            <Label className="x-links" circular color="grey">4</Label>
            Job Type
          </Grid.Column>
          </Grid.Row>
      </Grid>
    )
  }
}
