import React,{Component} from  "react"
import { Popup ,Button, Grid,Embed,Header,Dimmer,GridColumn, Icon, Divider, Image, Input, Select, Form, Card} from 'semantic-ui-react'
import Footer from "../footer";
import Navbar from "../navbar";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import Particles from "react-particles-js";
import "react-typist/dist/Typist.css"
import Contactform from "../forms/contact";
function mapStateToProps(state){
    return {auth: state.auth}
}
 class Howitworks extends Component{
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
            <div className="white home " >
                <Navbar {...this.props}/>
                <section className="first-section">
                    <div className="skew howitworks"></div>
                    <div>
                        <Grid columns="equal" textAlign="center" className=" xcontainer">
                            <Grid.Row >
                                <GridColumn></GridColumn>
                            <Grid.Column computer="16" tablet="16" mobile="16" className="">
                              <div>
                              <center>
                                  <h1 className="ttbold darkblue-color">How it Works</h1>
                              </center>   
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
	}} style={{position:"absolute",width:"100%",top:0,bottom:0,left:0,right:0,zIndex:0,transform:"skewY(-6deg)",transformOrigin:"left"}} />
                       <Grid columns="equal" className="xcontainer" textAlign="center" data-aos="zoom-in-up">
                           <Grid.Column>
                          <Button circular icon="bullhorn" size="massive" inverted/>
                            <p><h2>Step one</h2></p>
                            <p className="epistle">Tell us what to do</p>
                            <p className="">Booking any service with Mistri Mama is a few clicks' job. Select a service, select your location, give your contact and done!
                            If you want to do it even faster, just call to 09610-222-111 and tell how can we help.</p>
                           </Grid.Column>
                           <Grid.Column computer="6" tablet="6" mobile="16"> 
                           <Button circular icon="bullhorn" size="massive" inverted/>
                            <p><h2>Step two</h2></p>
                            <p className="epistle">Tell us what to do</p>
                            <p className="">Once you are done with booking a service, our customer manager instantly calls you and asks a few questions to collect more details about the job. Upon your consent, he confirms and schedules your service accordingly.</p>
                           </Grid.Column>
                           <Grid.Column>
                           <Button circular icon="bullhorn" size="massive" inverted/>
                            <p><h2>Step three</h2></p>
                            <p className="epistle">Tell us what to do</p>
                            <p className="">What next? Nothing! Now, you relax and enjoy Mistri Mama Services.</p>
                           </Grid.Column>
                       </Grid>
                   </section>
                   
                   <section className="fifth-section">
                   <Grid columns="equal" textAlign="center" className=" xcontainer">
                            <Grid.Row >
                            <Grid.Column >
                            </Grid.Column>
                            <Grid.Column computer="8" tablet="8" mobile="16" data-aos="zoom-in">
                            <h2 className="darkblue-color">Refer and Earn</h2>
                            <p className="epistle2 blue-color" >
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

export default connect(mapStateToProps)(Howitworks)