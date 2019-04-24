import React,{Component} from  "react"
import { Popup ,Button, Grid,Embed,Header,Dimmer,GridColumn, Icon, Divider, Image, Input, Select, Form, Card, Responsive, Label, Modal} from 'semantic-ui-react'
import Footer from "../footer";
import Navbar from "../navbar/index";
import {connect} from "react-redux"
import "./dashboard.scss"
// import Setup from "./setup";
// import Setupsec from './setupsec';
// import Setupthird from './setupthird'
// import Setupfour from './setupfour';
import axios from 'axios';
import { addSetUp } from '../../actions/app';
import Uploadcv from '../ui/cvuploader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Range, getTrackBackground } from 'react-range';
import { addSkills } from '../../actions/app';
import Profilepics from '../ui/profilepics'
import Certiupload from '../ui/certiupload';
import Tabes from './tabes'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

const optionsTime = [
    { key: '1', text: '12:00am', value: '12:00am' },
    { key: '2', text: '1:00am', value: '1:00am' },
    { key: '3', text: '2:00am', value: '2:00am' },
    { key: '4', text: '3:00am', value: '3:00am' },
    { key: '5', text: '4:00am', value: '4:00am' },
    { key: '6', text: '5:00am', value: '5:00am' },
    { key: '7', text: '6:00am', value: '6:00am' },
    { key: '8', text: '7:00am', value: '7:00am' },
    { key: '9', text: '8:00am', value: '8:00am' },
    { key: '10', text: '9:00am', value: '9:00am' },
    { key: '11', text: '10:00am', value: '10:00am' },
    { key: '12', text: '11:00am', value: '11:00am' },
    { key: '13', text: '12:00pm', value: '12:00pm' },
    { key: '14', text: '1:00pm', value: '1:00pm' },
    { key: '15', text: '2:00pm', value: '2:00pm' },
    { key: '16', text: '3:00pm', value: '3:00pm' },
    { key: '17', text: '4:00pm', value: '4:00pm' },
    { key: '18', text: '5:00pm', value: '5:00pm' },
    { key: '19', text: '6:00pm', value: '6:00pm' },
    { key: '20', text: '7:00pm', value: '7:00pm' },
    { key: '21', text: '8:00am', value: '8:00am' },
    { key: '22', text: '9:00pm', value: '9:00pm' },
    { key: '23', text: '10:00pm', value: '10:00pm' },
    { key: '24', text: '11:00pm', value: '11:00pm' },
]

const STEP = 1;
const MIN = 0;
const MAX = 100;

 class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            active:false,
            show: true,
            show1: false,
            show2: false,
            show3: false,
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
            active1: false,
            active2: false,
            active3: false,
            active4: false,
            active5: false,
            active6: false,
            active7: false,
            active8: false,
            active9: false,
            active10: false,
            active11: false,
            active12: false,
            active13: false,
            active14: false,
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
            modalOpen: false
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
        this.onNext = this.onNext.bind(this);
        this.onPrevious = this.onPrevious.bind(this)
        this.addDetails = this.addDetails.bind(this)
        this.typing = this.typing.bind(this);
        this.handleClick = this.handleClick.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)
        this.handleClick6 = this.handleClick6.bind(this)
        this.handleClick7 = this.handleClick7.bind(this)
        this.handleClick8 = this.handleClick8.bind(this)
        this.handleClick9 = this.handleClick9.bind(this)
        this.handleClick10 = this.handleClick10.bind(this)
        this.handleClick11 = this.handleClick11.bind(this)
        this.handleClick12 = this.handleClick12.bind(this)
        this.handleClick13 = this.handleClick13.bind(this)
        this.handleClick14 = this.handleClick14.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.onProfileSet = this.onProfileSet.bind(this)
        this.onLocationSet = this.onLocationSet.bind(this)
        this.onAvailabilitySet = this.onAvailabilitySet.bind(this)
        this.onJobTypeSet = this.onJobTypeSet.bind(this)
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

    handleClick() {
        this.setState({ actives: !this.state.actives })
    }
    handleClick1() {
        this.setState({ active1: !this.state.active1 })
    }
    handleClick2() {
        this.setState({ active2: !this.state.active2 })
    }
    handleClick3() {
        this.setState({ active3: !this.state.active3 })
    }
    handleClick4() {
        this.setState({ active4: !this.state.active4 })
    }
    handleClick5() {
        this.setState({ active5: !this.state.active5 })
    }
    handleClick6() {
        this.setState({ active6: !this.state.active6 })
    }
    handleClick7() {
        this.setState({ active7: !this.state.active7 })
    }
    handleClick8() {
        this.setState({ active8: !this.state.active8 })
    }
    handleClick9() {
        this.setState({ active9: !this.state.active9 })
    }
    handleClick10() {
        this.setState({ active10: !this.state.active10 })
    }
    handleClick11() {
        this.setState({ active11: !this.state.active11 })
    }
    handleClick12() {
        this.setState({ active12: !this.state.active12 })
    }
    handleClick13() {
        this.setState({ active13: !this.state.active13 })
    }
    handleClick14() {
        this.setState({ active14: !this.state.active14 })
    }
    handleChange(date) {
        this.setState({
          birthDay: date
        });
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
    // handleOpen(){ this.setState({ active: true })}
    // handleClose(){this.setState({ active: false })}
    addDetails() {
        this.props.addDetails()
    }
    render(){
        let setup;
        
        const show = this.state.show;
        const show1 = this.state.show1;
        const show2 = this.state.show2;
        const show3 = this.state.show3;


        if(show === true) {
            setup = <Form style={{ backgroundColor: 'white' }} size="large">
                        <Form.Group widths='equal'>
                            <Form.Input name="firstname" onChange={this.typing} fluid label='First name'   />
                            <Form.Input name="lastname" onChange={this.typing}   fluid label='Last name'/>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input name="postalCode" onChange={this.typing} type="number" fluid label="Postal Code"/>
                            <Form.Input name="phoneNumber" onChange={this.typing} type="number" fluid label="Phone Number"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Select name="gender" onChange={this.typing} options={options} placeholder='Gender'  />
                            <DatePicker
                                selected={this.state.birthDay}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Uploadcv />
                        <Certiupload/>
                        <Profilepics/>
                    </Form>;
        } else if (show1 === true) {
            setup = <Form style={{ backgroundColor: 'white' }} size="large">
                        <Form.Group widths='equal'>
                        <Form.Input name="streetApt" onChange={this.typing} fluid label='Street Apt'   />
                        <Form.Input name="homeAddress" onChange={this.typing} fluid label="Enter your home address"/>
                        </Form.Group>
                        <Form.Group widths="equal">
                        <Form.Input name="provinceState" onChange={this.typing} fluid label="Province/State"/>
                        <Form.Input name="cityTown" onChange={this.typing} fluid label='City/Town'/>
                        </Form.Group>
                        <div className="flexbox">
                        <p style={{ fontWeight: '600', color: '#555' }}>How far are you willing to travel</p>
                        <Icon className="car-adjust" name="car"/>
                        </div>
                        <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap"
                            }}
                            >
                            <Range
                                values={this.state.values}
                                step={STEP}
                                min={MIN}
                                max={MAX}
                                onChange={values => this.setState({ values })}
                                renderTrack={({ props, children }) => (
                                <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    style={{
                                    ...props.style,
                                    height: "36px",
                                    display: "flex",
                                    width: "100%"
                                    }}
                                >
                                    <div
                                    ref={props.ref}
                                    style={{
                                        height: "5px",
                                        width: "100%",
                                        borderRadius: "4px",
                                        background: getTrackBackground({
                                        values: this.state.values,
                                        colors: ["#548BF4", "#ccc"],
                                        min: MIN,
                                        max: MAX
                                        }),
                                        alignSelf: "center"
                                    }}
                                    >
                                    {children}
                                    </div>
                                </div>
                                )}
                                renderThumb={({ props, isDragged }) => (
                                <div
                                    {...props}
                                    style={{
                                    ...props.style,
                                    height: "42px",
                                    width: "42px",
                                    backgroundColor: "#FFF",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "rgb(170, 170, 170) 0px 1px 3px",
                                    outline: 'none',
                                    borderRadius: '2rem'
                                    }}
                                >
                                    <div
                                    style={{
                                        height: "16px",
                                        width: "5px",
                                        backgroundColor: isDragged ? "#548BF4" : "#CCC"
                                    }}
                                    />
                                </div>
                                )}
                            />
                            <output className="distance" style={{ marginTop: "15px" }} id="output">
                                {parseInt(this.state.values[0])} mi
                            </output>
                            </div>
                        </div>
                    </Form>
        } else if (show2 === true) {
            setup = <Form style={{ backgroundColor: 'white' }} size="large">
                        <p className="text-center bolder">Add multiple day and time to show you are always avalaible</p>
                        <Form.Group style={{ display: 'flex', justifyContent: 'center' }} widths='equal'>
                            <Button.Group>
                                <Button name={this.state.actives === true ? 'mon' : ''} toggle active={this.state.actives} onClick={this.handleClick} className="btn-hover mr-02" basic color="blue">MON</Button>
                                <Button name={this.state.active1 === true ? 'tues' : ''} toggle active={this.state.active1} onClick={this.handleClick1} className="btn-hover mr-02" basic color="blue">TUES</Button>
                                <Button name={this.state.active2 === true ? 'wed' : ''} toggle active={this.state.active2} onClick={this.handleClick2} className="btn-hover mr-02" basic color="blue">WED</Button>
                                <Button name={this.state.active3 === true ? 'thur' : ''} toggle active={this.state.active3} onClick={this.handleClick3} className="btn-hover mr-02" basic color="blue">THUR</Button>
                                <Button name={this.state.active4 === true ? 'fri' : ''} toggle active={this.state.active4} onClick={this.handleClick4} className="btn-hover mr-02" basic color="blue">FRI</Button>
                                <Button name={this.state.active5 === true ? 'sat' : ''} toggle active={this.state.active5} onClick={this.handleClick5} className="btn-hover mr-02" basic color="blue">SAT</Button>
                                <Button name={this.state.active6 === true ? 'sun' : ''} toggle active={this.state.active6} onClick={this.handleClick6} className="btn-hover mr-02" basic color="blue">SUN</Button>
                            </Button.Group>
                        </Form.Group>
                        <Form.Group>
                            <Form.Select style={{ width: '100%' }} name="workTime1" onChange={this.typing} options={optionsTime} placeholder="Available Time" />
                            <span className="span-adjust">to</span>
                            <Form.Select style={{ width: '100%' }} name="workTime2" onChange={this.typing} options={optionsTime} placeholder="Available Time" />
                        </Form.Group>
                        <div className="available-btn">
                        <Button color="blue" className="av-round">Add Avalability</Button>
                        </div>
                        
                    </Form>;
        } else if(show3 === true) {
            setup =     <Form style={{ backgroundColor: 'white' }}>
                            <p className="text-center bolder">What is your highest level of education you have completed</p>
                            <Form.Group style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button.Group>
                                    <Button name={this.state.active7 === true ? 'high school' : ''} toggle active={this.state.active7} onClick={this.handleClick7} className="btn-hover mr-02" basic color="blue">High School</Button>
                                    <Button name={this.state.active8 === true ? 'college' : ''} toggle active={this.state.active8} onClick={this.handleClick8} className="btn-hover mr-02" basic color="blue">College</Button>
                                    <Button name={this.state.active9 === true ? 'university' : ''} toggle active={this.state.active9} onClick={this.handleClick9} className="btn-hover mr-02" basic color="blue">University</Button>
                                    <Button name={this.state.active10 === true ? 'others' : ''} toggle active={this.state.active10} onClick={this.handleClick10} className="btn-hover mr-02" basic color="blue">Others</Button>
                                </Button.Group>
                            </Form.Group>
                            <p className="text-center bolder">When are you avalaible for work</p>
                            <Form.Group style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button.Group>
                                    <Button name={this.state.active11 === true ? 'weekends' : ''} toggle active={this.state.active11} onClick={this.handleClick11} className="btn-hover mr-02" basic color="blue">Weekends</Button>
                                    <Button name={this.state.active12 === true ? 'weekends and evenings' : ''} toggle active={this.state.active12} onClick={this.handleClick12} className="btn-hover mr-02" basic color="blue">Weekends and evenings</Button>
                                    <Button name={this.state.active13 === true ? 'anytime' : ''} toggle active={this.state.active13} onClick={this.handleClick13} className="btn-hover mr-02" basic color="blue">Anytime</Button>
                                    <Button name={this.state.active14 === true ? 'daytime' : ''} toggle active={this.state.active14} onClick={this.handleClick14} className="btn-hover mr-02" basic color="blue">Daytime</Button>
                                </Button.Group>
                            </Form.Group>
                            <Form.Group>
                                <Modal open={this.state.modalOpen} onClose={this.handleClose} size="tiny" trigger={<Button onClick={this.handleOpen} color="blue">Add work experience</Button>}>
                                    <Modal.Content>
                                        <Form>
                                        <Form.Group widths='equal'>
                                            <Form.Input onChange={this.typing} name="employer" fluid label='Employer'/>
                                        </Form.Group>
                                        <Form.Group widths='equal'>
                                            <Form.Input onChange={this.typing} name="start" placeholder="e.g 2018" type="number" fluid label='Start'   />
                                            <Form.Input onChange={this.typing} name="end" placeholder="e.g 2019" type="number"  fluid label='End'/>
                                        </Form.Group>
                                        <Form.Group widths='equal'>
                                            <Form.Input onChange={this.typing} name="title" fluid label="Title" />
                                        </Form.Group>
                                        <Form.Group widths="equal">
                                            <Form.TextArea onChange={this.typing} name="responsibility" rows="10" label="Responsibilities & Accomplishments"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Button onClick={this.handleClose} basic color='red' content='Delete'/>
                                            <Button onClick={this.addExperience} basic color='blue' content='Save'/>
                                        </Form.Group>
                                        </Form>
                                    </Modal.Content>
                                </Modal>
                            </Form.Group>
                        </Form>;
        }

        // const deta
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
                                    <Label onClick={this.onProfileSet} id="defaultOpen" className="x-links" circular color={this.state.show === true ? "blue" : "grey"} >1</Label>
                                    Profile
                                </Grid.Column>
                                <Grid.Column>
                                    {/* eslint-disable-next-line */}
                                    <Label onClick={this.onLocationSet} className="x-links" circular color={this.state.show1 === true ? "blue" : "grey"} >2</Label>
                                    Location
                                </Grid.Column>
                                <Grid.Column>
                                    {/* eslint-disable-next-line */}
                                    <Label onClick={this.onAvailabilitySet} className="x-links" circular color={this.state.show2 === true ? "blue" : "grey"} >3</Label> 
                                    Availability
                                </Grid.Column>
                                <Grid.Column>
                                    <Label onClick={this.onJobTypeSet} className="x-links" circular color={this.state.show3 === true ? "blue" : "grey"}>4</Label>
                                    Job Type
                                </Grid.Column>
                                </Grid.Row>
                            </Grid>
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
                                            this.state.show3 === true ? (
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
function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    addDetails: () => dispatch(addSetUp())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)