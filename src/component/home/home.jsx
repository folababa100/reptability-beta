import React,{Component} from  "react"
import { Popup ,Button, Grid,Embed,Header,Dimmer,GridColumn, Icon, Divider, Image, Input, Select, Form, Card, Responsive} from 'semantic-ui-react'
import Footer from "../footer";
import Navbar from "../navbar/index";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import Particles from "react-particles-js";
import "react-typist/dist/Typist.css"
import Contactform from "../forms/contact";
function mapStateToProps(state){
    return {auth: state.auth}
}
 class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            active:false
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
    }
   
    scroll(){
        window.scrollBy({
            top: 600,
            left: 0,
            behavior: 'smooth'
          });
    }
    handleOpen(){ this.setState({ active: true })}
    handleClose(){this.setState({ active: false })}
    render(){
        const options = [
            { key: 'all', text: 'All', value: 'all' },
            { key: 'articles', text: 'Articles', value: 'articles' },
            { key: 'products', text: 'Products', value: 'products' },
          ]
        return(
            <div className="white home">
                <Navbar {...this.props}/>
            
                <section className="first-section">
                    <div className="skew"></div>
                    <div>
                        <Grid columns="equal"  className=" xcontainer">
                            <Grid.Row >
                                <GridColumn></GridColumn>
                            <Grid.Column computer="8" tablet="8" mobile="16" className="flex-justify">
                              <div>
                              <center>
                                  <h1 className="ttbold darkblue-color">Mistri Mama Services Test</h1>
                                <p className="epistle darkblue-color">
                                An online based service platform that offers home services in all areas of Dhaka City.
                                </p>
                              </center>   
                                <Responsive minWidth={780}>
                                <Input type='text' style={{margin:"15px 0px"}} size="large" placeholder='Search...' action>
                                    <Select compact options={options} defaultValue='articles' />

                                    <Select compact options={options} defaultValue='articles' />
                                    <Button type='submit' color="blue">Search</Button>
                                </Input>
                                </Responsive>
                                <Responsive maxWidth={780}>
                                <Input type='text' style={{margin:"15px 0px"}} size="tiny" placeholder='Search...' action>
                                    <Select compact options={options} defaultValue='articles' />
                                    <Button type='submit' color="blue">Search</Button>
                                </Input>
                                </Responsive>
                              </div>
                            </Grid.Column>
                            <Grid.Column >
                                {/* <Image src="./images/Stack@2x.png" size="large" floated="right"/> */}
                            </Grid.Column>
                            
                            </Grid.Row>
                        </Grid>
                    </div>
                       
                   </section>
                   <section className="second-section">
                  
                   <div className="skew"></div>
                   <Particles params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "bottom",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} style={{position:"absolute",width:"100%",top:0,bottom:"-200px",left:0,right:0,zIndex:0,transform:"skewY(-6deg)",transformOrigin:"left"}} />
                       <Grid columns="equal" data-aos="zoom-in-up">
                           <Grid.Column></Grid.Column>
                           <Grid.Column computer="8" tablet="8" mobile="16"> 
                           <h2 >What Mistri Mama do?</h2>
                        <div className="bottom-line"></div><br /><br/>
                        <p className="epistle2">Providing quality services with the best customer experience through developing and empowering local skilled workforce</p>
                        <p><Link to="/about-us"> Learn More <Icon name="arrow right" /></Link></p>
                           </Grid.Column>
                           <Grid.Column></Grid.Column>
                       </Grid>
                     
                   </section>
                   <section className="third-section">
                   
                   <Grid columns="equal" >
                        <Grid.Row textAlign="center" className="bottom-margin">
                            <Grid.Column><h2 className="blue-color" data-aos="zoom-in-up">Our Services</h2></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column computer="2" tablet="2" mobile="16"></Grid.Column>
                        <Grid.Column mobile="16"  computer="4" tablet="4" >
                                <Card  className="our-services" fluid data-aos-delay="100" data-aos="flip-left">
                                    <Card.Content >
                                        <Button icon="code branch" size="huge" circular color="blue"/>
                                        <p className="title blue-color">Electrical Services</p>
                                        <p className="desc">We listen to your problem, Assign our best resource to assist you and Provide specialized services to fix your suffering</p>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                           <Grid.Column computer="4" tablet="4" mobile="16"> 
                                <Card  className="our-services"  fluid  data-aos-delay="400" data-aos="flip-left">
                                    <Card.Content >
                                        <Button icon="filter" size="huge" circular color="blue"/>
                                        <p className="title blue-color">Plumber Services</p>
                                        <p className="desc">We listen to your problem, Assign our best resource to assist you and Provide specialized services to fix your suffering</p>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column computer="4" tablet="4" mobile="16" > 
                                <Card  className="our-services" fluid data-aos-delay="800" data-aos="flip-left">
                                    <Card.Content >
                                        <Button icon="cogs" size="huge" circular color="blue"/>
                                        <p className="title blue-color">Generator Services</p>
                                        <p className="desc">We listen to your problem, Assign our best resource to assist you and Provide specialized services to fix your suffering</p>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column computer="2" tablet="2" mobile="16"></Grid.Column>
                            
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column computer="2" tablet="2" mobile="16"></Grid.Column>
                        <Grid.Column computer="4" tablet="4" mobile="16"> 
                                <Card  className="our-services" fluid  data-aos-delay="100" data-aos="flip-left">
                                    <Card.Content >
                                        <Button icon="code branch" size="huge" circular color="blue"/>
                                        <p className="title blue-color">Air Conditional Services</p>
                                        <p className="desc">We listen to your problem, Assign our best resource to assist you and Provide specialized services to fix your suffering</p>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                           <Grid.Column computer="4" tablet="4" mobile="16"> 
                                <Card  className="our-services" fluid  data-aos-delay="400" data-aos="flip-left">
                                    <Card.Content >
                                        <Button icon="keyboard outline" size="huge" circular color="blue"/>
                                        <p className="title blue-color">IT Services</p>
                                        <p className="desc">We listen to your problem, Assign our best resource to assist you and Provide specialized services to fix your suffering</p>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column computer="4" tablet="4" mobile="16" > 
                                <Card  className="our-services" data-aos-delay="800" data-aos="flip-left">
                                    <Card.Content >
                                        <Button icon="video camera" size="huge" circular color="blue"/>
                                        <p className="title blue-color">CCTV Services</p>
                                        <p className="desc">We listen to your problem, Assign our best resource to assist you and Provide specialized services to fix your suffering</p>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column computer="2" tablet="2" mobile="16"></Grid.Column>
                        </Grid.Row>
                       </Grid>
                   </section>
                   <section className="fourth-section">
                        <Grid columns="equal" className=" xcontainer">
                            <Grid.Row >
                            <Grid.Column computer="8" tablet="8" mobile="16">
                              <div > 
                              <h2 data-aos="slide-right" className="ttbold darkblue-color">Become A Service Partner with us</h2>
                                <p  data-aos="fade-in-up" className="epistle2 blue-color">
                                Are you looking for an income source with your technical expertise ? You can earn regularly by registering in MistriMama online platform under Electrical, Plumbing, Air Condition, Generator, CCTV or IT service. Send us a message by entering your details and any comments you may have in the form.
                                </p>
                                <Responsive minWidth="780">
                                <Button content="Learn More" size="big" color="blue"/>
                                </Responsive>
                                <Responsive maxWidth="780">
                                <Button content="Learn More" color="blue" style={{marginBottom:"15px"}}/>
                                </Responsive>
                              </div>
                            </Grid.Column>
                            <Grid.Column >
                                <Contactform />
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                   </section>
                   <section className="fifth-section">
                   <Grid columns="equal" textAlign="center" className=" xcontainer">
                            <Grid.Row >
                            <Grid.Column >
                            </Grid.Column>
                            <Grid.Column computer="8" tablet="8" mobile="16" data-aos="zoom-in">
                            <h2 className="darkblue-color">Refer and Earn</h2>
                            <p className="epistle2 blue-color hide-xs" >
                            We give a chance for people to work in the professional environment with challenges and values. Come with us!
                            </p>
                            <Link to="/referral" className="ttbold">Learn More <Icon name="arrow alternate circle right outline" /></Link>
                            </Grid.Column>
                            <Grid.Column >
                            </Grid.Column>
                            
                            </Grid.Row>
                        </Grid>
                   </section>
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

export default connect(mapStateToProps)(Home)