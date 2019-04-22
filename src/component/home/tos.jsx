import React,{Component} from  "react"
import { Popup ,Button, Grid,Embed,Header,Dimmer,GridColumn, Icon, Divider, Image, Input, Select, Form, Card} from 'semantic-ui-react'
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
 class Tos extends Component{
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
  
        return(
            <div className="white tos">
                <Navbar {...this.props}/>
            
                <section className="first-section">
                    <div>
                        <Grid columns="equal" className=" xcontainer">
                            <Grid.Row >
                            <Grid.Column >
                                <Image src="../images/app-development-header.png" size="large" floated="left"/>
                            </Grid.Column>
                            <Grid.Column computer="8" tablet="8" mobile="16" className="flex-justify">
                              <div>
                              <h1 className="ttbold darkblue-color">TERMS OF USE</h1>
                                <p className="epistle tt blue-color">Mistri Mama is a technology Platform that enables the user to book Servicemen in the employment of Mistri Mama or third-party Independent Contractors through it</p>
                              </div>
                            </Grid.Column>
                            
                            </Grid.Row>
                        </Grid>
                    </div>
                       
                   </section>
                  
                   <section className="second-section">
                        <Grid columns="equal" className=" xcontainer">
                            <Grid.Row >
                            <Grid.Column > </Grid.Column>
                            <Grid.Column computer="14" tablet="14" mobile="16">
                              <h2 >Terms of Use</h2>
                              <p className="epistle2">Mistri Mama is technology Platform that enables the user to book Servicemen in the employment of Mistri Mama or third-party Independent Contractors through it. The employees and third-party Independent Contractors will offer the services which may be scheduled through the use of the platform. Mistri Mama offers the information and method to obtain such third-party services, but has no responsibility or liability for any services provided to you by such third parties.</p>
                            </Grid.Column>
                            <Grid.Column > </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column > </Grid.Column>
                                <Grid.Column computer="14" tablet="14" mobile="16">
                              <p className="xtitle">USER(S) ELIGIBILITY</p>
                              <p className="epistle2"> User(s) means any individual or business entity/organization that legally operates in BD or in other countries and uses and has the right to use the Services provided by MISTRI MAMA. The Services provided by Mistri Mama is a technology based service which enables the hiring of Servicemen for a home-based solution of problems in categories such as appliances, electronics etc., through the Internet and / or mobile telecommunications devices. Our Services are available only to those individuals or companies who can form legally binding contracts under the applicable law. Therefore, user(s) must not be a minor as per Bangladesn Law; i.e. user(s) must be at least 18 years of age to be eligible to use our Services.
                                 </p>
                              <p className="epistle2">
                                MISTRI MAMA advises its users that while accessing the web site , they must follow/abide by the related laws. MISTRI MAMA is not responsible for the possible consequences caused by your behavior during use of web site or the Mistri Mama features. MISTRI MAMA may, in its sole discretion, refuse the service to anyone at any time.
                              </p>
                                </Grid.Column>
                            <Grid.Column > </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column > </Grid.Column>
                                <Grid.Column computer="14" tablet="14" mobile="16">
                              <p className="xtitle">AMENDMENT TO USER(S) AGREEMENT</p>
                              <p className="epistle2"> User(s) means any individual or business entity/organization that legally operates in BD or in other countries and uses and has the right to use the Services provided by MISTRI MAMA. The Services provided by Mistri Mama is a technology based service which enables the hiring of Servicemen for a home-based solution of problems in categories such as appliances, electronics etc., through the Internet and / or mobile telecommunications devices. Our Services are available only to those individuals or companies who can form legally binding contracts under the applicable law. Therefore, user(s) must not be a minor as per Bangladesn Law; i.e. user(s) must be at least 18 years of age to be eligible to use our Services.
                                 </p>
                                </Grid.Column>
                            <Grid.Column > </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column > </Grid.Column>
                                <Grid.Column computer="14" tablet="14" mobile="16">
                              <p className="xtitle">INTELLECTUAL PROPERTY RIGHTS</p>
                              <p className="epistle2"> 
                              In consideration of your use of our platforms, you represent that you are of legal age (18 years and above) to form a binding contract and are not a person barred from receiving services under any law in force in Banglades or other applicable jurisdiction. You further represent that you have provided true, accurate, current and complete information about yourself while registering on our website to avail the Services.
                                 </p>
                              <p className="epistle2">
                                If you provide any information that is untrue, inaccurate, not current or incomplete, or we have reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, we reserve the right to suspend or terminate your account and refuse any and all current or future use of our website and Mistri Mama features at any time. Mistri Mama will not be liable for any act or omission arising from the inaccurate information provided by you. At the time of registration on our website, you will have to enter a valid phone number. By registering your phone number, you consent to be contacted by us via phone call and / or SMS notifications in case of any Package / service updates. If we do so, you will be provided the option to “opt-out” of receiving future communications. In addition, if at any time, you do not wish to receive any future communications or you wish to have your name deleted from our mailing lists, please contact us. If you are registered with the DND National registry, you may not receive any promotional messages from us.
                              </p>
                                </Grid.Column>
                            <Grid.Column > </Grid.Column>
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

export default connect(mapStateToProps)(Tos)