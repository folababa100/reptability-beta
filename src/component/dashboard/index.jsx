import React,{Component} from  "react"
import { Popup ,Button, Grid,Embed,Header,Dimmer,GridColumn, Icon, Divider, Image, Input, Select, Form, Card, Responsive, Label} from 'semantic-ui-react'
import Footer from "../footer";
import Navbar from "../navbar/index";
import {connect} from "react-redux"
import "./dashboard.scss"
import Setup from "./setup";
import Setupsec from './setupsec';
import Setupthird from './setupthird'
import Setupfour from './setupfour';
import axios from 'axios'

 class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            active:false,
            show: true,
            show1: false,
            show2: false,
            show3: false
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
        this.onNext = this.onNext.bind(this);
        this.onPrevious = this.onPrevious.bind(this)
    }
    componentDidMount() {
        const location = window.location;
        console.log(location)
    }
  
    componentWillMount() {
        window.scrollBy({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    onNext() {
        if(this.state.show === true) {
            this.setState({
                show: false,
                show1: true,
                show2: false,
                show3: false
            })
        } else if(this.state.show1 === true) {
            this.setState({
                show: false,
                show1: false,
                show2: true,
                show3: false
            })
        } else if(this.state.show2 === true) {
            this.setState({
                show: false,
                show1: false,
                show2: false,
                show3: true
            })
        } else if(this.state.show3 === true) {
            this.setState({
                show: false,
                show1: false,
                show2: false,
                show3: true
            })
        }
    }
    onPrevious() {
        if(this.state.show === true) {
            this.setState({
                show: true,
                show1: false,
                show2: false,
                show3: false
            })
        } else if(this.state.show1 === true) {
            this.setState({
                show: true,
                show1: false,
                show2: false,
                show3: false
            })
        } else if(this.state.show2 === true) {
            this.setState({
                show: false,
                show1: true,
                show2: false,
                show3: false
            })
        } else if(this.state.show3 === true) {
            this.setState({
                show: false,
                show1: false,
                show2: true,
                show3: false
            })
        }
    }
    handleOpen(){ this.setState({ active: true })}
    handleClose(){this.setState({ active: false })}
    render(){
        let setup;
        
        const show = this.state.show;
        const show1 = this.state.show1;
        const show2 = this.state.show2;
        const show3 = this.state.show3;


        if(show === true) {
            setup = <Setup/>;
        } else if (show1 === true) {
            setup = <Setupsec/>;
        } else if (show2 === true) {
            setup = <Setupthird/>;
        } else if(show3 === true) {
            setup = <Setupfour/>;
        }
        return(
            <div className="white dashboard">
                <Navbar {...this.props}/>
                <Grid id="profile" columns="equal" className="x-tabs xsetup">
                    <Grid.Row style={{ backgroundColor: "#f9f9f9" }}>
                        <Grid.Column></Grid.Column>
                        <Grid.Column style={{ marginTop: '8rem' }} mobile="16" tablet="8" computer="8">
                            <Grid columns="4">
                                <Grid.Row className="xstep">
                                <Grid.Column>
                                    {/* eslint-disable-next-line */}
                                    <Label id="defaultOpen" className="x-links" circular color={this.state.show === true ? "blue" : "grey"} >1</Label>
                                    Profile
                                </Grid.Column>
                                <Grid.Column>
                                    {/* eslint-disable-next-line */}
                                    <Label className="x-links" circular color={this.state.show1 === true ? "blue" : "grey"} >2</Label>
                                    Location
                                </Grid.Column>
                                <Grid.Column>
                                    {/* eslint-disable-next-line */}
                                    <Label className="x-links" circular color={this.state.show2 === true ? "blue" : "grey"} >3</Label> 
                                    Availability
                                </Grid.Column>
                                <Grid.Column>
                                    <Label className="x-links" circular color={this.state.show3 === true ? "blue" : "grey"}>4</Label>
                                    Job Type
                                </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <center><h4>Create an amazing profile by answering a few simple questions</h4><br/><br/></center>
                            {setup}
                            <Grid columns="2">
                                <Grid.Row className="bottom-action">
                                    <Grid.Column>
                                    <a onClick={this.onPrevious} href="#"> <Icon name="arrow left"/> Previous</a>
                                    </Grid.Column>
                                    <Grid.Column onClick={this.onNext} textAlign="right">
                                    <a href="#">Next <Icon name="arrow right"/></a>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column></Grid.Column>
                    </Grid.Row>
                </Grid>
                   
               <Footer history={this.props.history} />
               <style>{`
               @media (max-width:400px){
                     .ui.container{
                        margin-left: 0.5em !important;
                        margin-right: 0.5em !important;
                    }
                }
               `}</style>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {auth: state.auth}
}
export default connect(mapStateToProps)(Dashboard)