import React,{Component} from  "react"
import { Popup ,Button, Grid,Embed,Header,Dimmer,GridColumn, Icon, Divider, Image, Input, Select, Form, Card} from 'semantic-ui-react'
import Footer from "../footer";
import Navbar from "../navbar";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import Particles from "react-particles-js";
function mapStateToProps(state){
    return {auth: state.auth}
}
 class Privacy extends Component{
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
                              <h1 className="ttbold darkblue-color">TERMS OF SERVICE</h1>
                                <p className="epistle tt blue-color">
                                To exercise any of your rights in connection with your personal information, we kindly ask that you open a Customer Relations ticket. Please include all the relevant details, so your ticket can be handled correctly
                                </p>
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
                              <h2 >Terms of service</h2>
                              <p className="epistle2">
                              Please read this privacy policy (the “Policy”) carefully to understand how we use your personal information. If you do not agree with this Policy, your choice is not to use Fiverr.com (the “Site”). By accessing or using this Site, you agree to this Policy. This Policy may change from time to time. If there are any material changes to how your personal information is used, we will notify you. Your continued use of the Site after we make changes is deemed to be acceptance of those changes, so please check the Policy periodically for update.
                              </p>
                            </Grid.Column>
                            <Grid.Column > </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column > </Grid.Column>
                                <Grid.Column computer="14" tablet="14" mobile="16">
                              <p className="xtitle">PERSONAL INFORMATION</p>
                              <p className="epistle2"> 
                              Consumer: During the Account registration process and during your usage of Reptability website, we will collect information such as your name, postal code, telephone email address and other personal information.


                                 </p>
                              <p className="epistle2">
                              Freelance platform: If and when they create and use an account with Reptability, will be required to disclose and provide information to Reptability including personal contact details, bank details, personal identification details and participate in polls or surveys or feedbacks etc.
                                We may also collect personal information that you post in your Offer, Profile, Wants, or Feedback, and any comments or discussions you post in any blog, chat room, or other correspondence site on the Website or mobile application, or any comments you provide during dispute resolution with other users of the Website or mobile application.
                                Such Personal Information may include your personal identifiable information such as your name, address, mobile number, your e-mail ids, your age, IP address, payment details and any other personal information which you may share in connection with the services.
                                This information is partially or completely accessible to all visitors using Reptability, either directly or by submitting a request for a service.
                                At the time of using the Reptability Service you will share certain Personal Information with Reptability, Reptability respects your Personal Information.
                                "Personal information" is defined to include information that whether on its own or in combination with other information may be used to readily identify or contact you such as: name, address, email address, phone number etc.
                                Reptability is owner and operator of this Website. Collectively, including all content provided by Reptability through Website you do not to have right to supply personally identifiable information.
                                Service Professionals and customers are required to create an account to be able to access certain portions of our Website, such as to submit questions, participate in polls or surveys, to request a quote, to submit a bid in response to a quote, and request information.
                                
                              </p>
                                </Grid.Column>
                            <Grid.Column > </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column > </Grid.Column>
                                <Grid.Column computer="14" tablet="14" mobile="16">
                              <p className="xtitle">SOCIAL NETWORKING SITES INFORMATION FROM</p>
                              <p className="epistle2"> 
                              We will ask that you grant us permission to access and collect your Facebook basic information (this includes your name, profile picture, gender, networks, user IDs, list of friends, date of birth, email address, and any other information you have set to public on your Facebook account).
                                 </p>
                                </Grid.Column>
                            <Grid.Column > </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column > </Grid.Column>
                                <Grid.Column computer="14" tablet="14" mobile="16">
                              <p className="xtitle">AUTOMATIC INFORMATION GATHERING, FROM OTHER TRACKING DEVICES AND COOKIES</p>
                              <p className="epistle2"> 
                              We and our third party service providers, which include ad networks, use cookies, web beacons, and other tracking technologies to collect information about your use of our Website and Services, such as your browser type, your ISP or operating system, your domain name, your access time, the URL of the previous website you visited, your page views, your IP address, and the type of device that you use.
                                 </p>
                              <p className="epistle2">
                              We use this information (including the information collected by our third party service providers) for Website analytics (including to determine which portions of our Website are used most frequently, what our users like/do not like), to assist us in determining relevant advertising) both on and off our Website), to evaluate the success of our advertising campaigns, and as otherwise described in this policy.
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

export default connect(mapStateToProps)(Privacy)
