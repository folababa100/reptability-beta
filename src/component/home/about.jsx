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
 class About extends Component{
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
            <div className="white about " >
                <Navbar {...this.props}/>
                <section className="first-section">
                    <div className="skew howitworks"></div>
                    <div>
                        <Grid columns="equal" textAlign="center" className=" xcontainer">
                            <Grid.Row >
                                <GridColumn></GridColumn>
                            <Grid.Column computer="8" tablet="8" mobile="16" className="">
                              <div>
                                  <h1 className="ttbold darkblue-color">About us</h1>
                                  <p className="epistle darkblue-color">
                                  You can book a call for Electrical Servicing , Air Condition , Plumbing , CCTV , IT Service and Generator or any other home repair service requirement right from your home. It's quite easy and here's how it works.
                                </p>
                                <Button content="Contact us" color="black" size="big" style={{paddingLeft:"40px",paddingRight:"40px"}} />
                              </div>
                            </Grid.Column>
                            <Grid.Column >
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                   </section>
                   <section className="second-section">
                   <Grid className="xcontainer">
                   <Grid.Row textAlign="center" className="bottom-margin">
                            <Grid.Column><h2 className="blue-color" data-aos="zoom-in-up">Our Services</h2></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
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
                        </Grid.Row>
                       </Grid>
                   </section>
                   <section className="third-section">
                   <Grid columns="equal"  className=" xcontainer">
                            <Grid.Row >
                                <GridColumn computer="8" tablet="8" mobile="16">
                                <div>
                                  <h1 className="ttbold ">Who we Are</h1>
                                  <p className="epistle tt ">
                                  Mistri Mama is an online based service platform that offers home services in all areas of Dhaka City. We ensure quality service by providing training to our technicians which also emphasis on safety and behavioral aspects. 
                                </p>
                                {/* <Button content="Contact us" color="black" size="big" style={{paddingLeft:"40px",paddingRight:"40px"}} /> */}
                              </div>
                                </GridColumn>
                            <Grid.Column computer="8" tablet="8" mobile="16" className="">
                                <Image src="./images/Stack@2x.png" size="large" floated="right"/>
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

export default connect(mapStateToProps)(About)