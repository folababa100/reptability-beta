import React,{Component} from  "react"
import { Grid, Icon, Divider, Image, Input, Select, Form, Card, Responsive} from 'semantic-ui-react'
import Footer from "../footer";
import Navbar from "../navbar/index";
import {connect} from "react-redux"
import "./dashboard.scss"
import Setup from "./setup";
import Setupsec from './setupsec';
import Setupthird from './setupthird'
import Setupfour from './setupfour';
import Setupfive from './setupfive';
import "react-datepicker/dist/react-datepicker.css";
import { addSkills, addSkill } from '../../actions/app';
import Setupsix from './setupsix';
import Setupseven from "./setupseven";
import Setupeight from "./setupeight";
import Setupnine from "./setupnine";
import Setupten from "./setupten";

 class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            active:false,
            show: true,
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false,
            show8: false,
            show9: false,
            birthDay: new Date(),
            gender: '',
            firstname: '',
            lastname: '',
            postalCode: 0,
            phoneNumber: 0,
            values: [0],
            streetApt: '',
            homeAddress: '',
            provinceState: '',
            cityTown: '',
            workTime1: '',
            workTime2: '',
            actives: false,
            mon: '',
            tues: '',
            wed: '',
            thur: '',
            fri: '',
            sat: '',
            sun: '',
            start: 0,
            end: 0,
            employer: '',
            responsibility: '',
            title: '',
            loading: false,
            success: '',
            error: '',
            modalOpen: false,
            skill: ''
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
        this.onNext = this.onNext.bind(this);
        this.onPrevious = this.onPrevious.bind(this)
        this.addDetails = this.addDetails.bind(this)
        this.typing = this.typing.bind(this);
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        // this.onProfileSet = this.onProfileSet.bind(this)
        // this.onLocationSet = this.onLocationSet.bind(this)
        // this.onAvailabilitySet = this.onAvailabilitySet.bind(this)
        // this.onJobTypeSet = this.onJobTypeSet.bind(this)
        this.addExperience = this.addExperience.bind(this)
        this.addExperiences = this.addExperiences.bind(this)
    }
    componentDidMount() {
        const location = window.location;
        console.log(location)
    }
    typing(e, data) {
        var name= data.name;
        this.setState({
          [name]: data.value
        })
    }
    handleChange(date) {
        this.setState({
          birthDay: date
        });
    }
    addExperience() {
        this.props.addExperience({
          skill: this.state.skill
        })
    }
    addExperiences() {
        this.props.addExperiences({
          employer: this.state.employer,
          start: this.state.start,
          end: this.state.end,
          responsibility: this.state.responsibility,
          title: this.state.title
        })
    }
    handleOpen() {
        this.setState({
            modalOpen: true
        })
    }
    handleClose() {
        this.setState({
            modalOpen: false
        })
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
                show1: true
            })
        } else if(this.state.show1 === true) {
            this.setState({
                show: false,
                show1: false,
                show2: true
            })
        } else if(this.state.show2 === true) {
            this.setState({
                show2: false,
                show3: true
            })
        } else if(this.state.show3 === true) {
            this.setState({
                show3: false,
                show4: true
            })
        } else if(this.state.show4 === true) {
            this.setState({
                show4: false,
                show5: true
            })
        } else if(this.state.show5 === true) {
            this.setState({
                show5: false,
                show6: true
            })
        } else if(this.state.show6 === true) {
            this.setState({
                show5: false,
                show6: false,
                show7: true
            })
        } else if(this.state.show7 === true) {
            this.setState({
                show7: false,
                show8: true
            })
        } else if(this.state.show8 === true) {
            this.setState({
                show8: false,
                show9: true,
            })
        } else if(this.state.show9 === true) {
            this.setState({
                show8: false,
                show9: true,
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
        } else if(this.state.show4 === true) {
            this.setState({
                show2: false,
                show3: true,
                show4: false,
                show5: false
            })
        } else if(this.state.show5 === true) {
            this.setState({
                show3: false,
                show4: true,
                show5: false
            })
        } else if(this.state.show6 === true) {
            this.setState({
                show4: false,
                show5: true,
                show6: false
            })
        } else if(this.state.show7 === true) {
            this.setState({
                show5: false,
                show6: true,
                show7: false
            })
        } else if(this.state.show8 === true) {
            this.setState({
                show6: false,
                show7: true,
                show8: false,
                show9: false,
            })
        } else if(this.state.show9 === true) {
            this.setState({
                show7: false,
                show8: true,
                show9: false,
            })
        }
    }
    addDetails() {
        this.props.addDetails()
    }
    render(){
        let setup;
        
        const show = this.state.show;
        const show1 = this.state.show1;
        const show2 = this.state.show2;
        const show3 = this.state.show3;
        const show4 = this.state.show4;
        const show5 = this.state.show5;
        const show6 = this.state.show6;
        const show7 = this.state.show7;
        const show8 = this.state.show8;
        const show9 = this.state.show9;


        if(show === true) {
            setup = <Setup/>;
        } else if (show1 === true) {
            setup = <Setupsec/>
        } else if (show2 === true) {
            setup = <Setupthird/>;
        } else if(show3 === true) {
            setup = <Setupfour/>;
        } else if(show4 === true) {
            setup = <Setupfive/>
        } else if(show5 === true) {
            setup = <Setupsix/>
        } else if(show6 === true) {
            setup = <Setupseven/>
        } else if(show7 === true) {
            setup = <Setupeight/>
        } else if(show8 === true) {
            setup = <Setupnine/>
        } else if(show9 === true) {
            setup = <Setupten/>
        }

        // const deta
        return(
            <div className="white dashboard">
                {/* <Navbar {...this.props}/> */}
                <Grid id="profile" columns="equal" className="x-tabs xsetup">
                    <Grid.Row>
                        <Grid.Column></Grid.Column>
                        <Grid.Column>
                            
                        </Grid.Column>
                        <Grid.Column></Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ backgroundColor: "#f9f9f9" }}>
                        <Grid.Column></Grid.Column>
                        <Grid.Column style={{ marginTop: '8rem' }} mobile="16" tablet="8" computer="8">
                            {/* <Tabes/> */}
                            <center><h4>Create an amazing profile by answering a few simple questions</h4><br/><br/></center>
                            {setup}
                            <Grid columns="2">
                                <Grid.Row className="bottom-action">
                                    <Grid.Column>
                                        {
                                            this.state.show === true ? (
                                                <div></div>
                                            ) : (
                                                
                                                    <a onClick={this.onPrevious} href="#"> <Icon name="arrow left"/> Previous</a>
                                            )
                                        }
                                    </Grid.Column>
                                    <Grid.Column textAlign="right">
                                        {
                                            this.state.show9 === true ? (
                                                <div></div>
                                            ) : (
                                                    <a onClick={this.onNext} href="#">Next <Icon name="arrow right"/></a>
                                            )
                                        }
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

export default Dashboard
