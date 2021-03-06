import React,{Component} from  "react"
import { Popup ,Button, Grid,Embed,Header,Dimmer,GridColumn, Icon, Divider, Image, Input, Select, Form, Card, Responsive} from 'semantic-ui-react'
import Footer from "../footer";
import Navbar from "../navbar";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import Particles from "react-particles-js";
import "react-typist/dist/Typist.css"
import Contactform from "../forms/contact";
import Servicepartner from "../ui/servicepartner";
function mapStateToProps(state){
    return {auth: state.auth}
}
 class Contact extends Component{
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
            <div className="white contact">
                <Navbar {...this.props}/>
            
                <section className="first-section">
                
                    <div>
                        <Grid columns="equal" className=" xcontainer">
                            <Grid.Row >
                            <Grid.Column computer="8" tablet="8" mobile="16" className="" >
                                <Responsive  minWidth="780">
                                <Contactform />
                                </Responsive>
                            </Grid.Column>
                            <Grid.Column computer="1" tablet="1" mobile="16" className=""></Grid.Column>
                            <Grid.Column computer="5" tablet="5" mobile="16" className="">
                              <div>
                              <h1 className="ttbold darkblue-color"> Contact with us to fix your problem</h1>
                                <p className="epistle tt blue-color"> Our highly trained and professional technicians are always a CALL away to provide Electrical, Plumbing, Generator, AC, CCTV, etc. servicing works at your doorstep.</p>
                              </div>
                            </Grid.Column>
                            <Grid.Column computer="8" tablet="8" mobile="16" className="" >
                                <Responsive  maxWidth="780">
                                <br />
                                <Contactform />
                                </Responsive>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                       
                   </section>
                  
                   <section className="second-section">
                        <Grid columns="equal" textAlign="center" className=" xcontainer">
                            <Grid.Row >
                            <Grid.Column > </Grid.Column>
                            <Grid.Column computer="9" tablet="9" mobile="16">
                              <div data-aos="zoom-in-up"> 
                              <h2  className="ttbold darkblue-color">Become A Service Partner with us</h2>
                              {/* <Contactform /> */}
                              <Servicepartner />
                              </div>
                            </Grid.Column>
                            <Grid.Column > </Grid.Column>
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

export default connect(mapStateToProps)(Contact)