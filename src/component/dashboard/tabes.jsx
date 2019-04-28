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
  onProfileSet() {
    this.setState({
        show: true,
        show1: false,
        show2: false,
        show3: false
    })
}
onLocationSet() {
    this.setState({
        show: false,
        show1: true,
        show2: false,
        show3: false
    })
}
onAvailabilitySet() {
    this.setState({
        show: false,
        show1: false,
        show2: true,
        show3: false
    })
}
onJobTypeSet() {
    this.setState({
        show: false,
        show1: false,
        show2: false,
        show3: true
    })
}
  render() {
    
    return (
      <Grid columns="4">
        <Grid.Row className="xstep">
          <Grid.Column>
            <Label onClick={this.onProfileSet} id="defaultOpen" className="x-links" circular color={this.state.show === true ? "blue" : "grey"} >1</Label>
            Profile
                                </Grid.Column>
          <Grid.Column>
            <Label onClick={this.onLocationSet} className="x-links" circular color={this.state.show1 === true ? "blue" : "grey"} >2</Label>
            Location
                                </Grid.Column>
          <Grid.Column>
            <Label onClick={this.onAvailabilitySet} className="x-links" circular color={this.state.show2 === true ? "blue" : "grey"} >3</Label>
            Availability
                                </Grid.Column>
          <Grid.Column>
            <Label onClick={this.onJobTypeSet} className="x-links" circular color={this.state.show3 === true ? "blue" : "grey"}>4</Label>
            Job Type
                                </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
