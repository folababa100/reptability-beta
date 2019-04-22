import React,{Component} from  "react"
import { Popup ,Button, Grid,Embed,Header,Dimmer,GridColumn, Icon, Divider, Image, Input, Select, Form, Card, Responsive} from 'semantic-ui-react'
import Footer from "../footer";
import Navbar from "../navbar/index";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import "./homepage.scss"

 class HomePage extends Component{
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
            <div className="white home">
                <Navbar {...this.props}/>
            
                <section className="first-section">
                    <div>
                        <Grid columns="equal"  className=" xcontainer">
                            <Grid.Row >
                                <GridColumn></GridColumn>
                            <Grid.Column computer="8" tablet="8" mobile="16" className="flex-justify">
                              <div>
                              <center>
                                <h1 className="ttbold darkblue-color">Find quality candidates quickly & easily</h1>
                                <p className="epistle darkblue-color">
                                Grow your business through the top workers
                                website. Hire talent nearby or worldwide.
                                </p>
                              </center>   
                                <Responsive className="mt-two" minWidth={780}>
                                    <Grid className="j-center">
                                        <div className="flex-box">
                                            <span className="txt-home">Employers</span>
                                            <Link to="/signup/employer">
                                                <Button primary className="btn-home" size="huge">Looking to hire?</Button>
                                            </Link>
                                        </div>
                                        <div className="flex-box">
                                            <span className="txt-home">Workers</span>
                                            <Link to="/signup/worker">
                                                <Button primary className="btn-home" size="huge">Looking for a job?</Button>
                                            </Link>
                                        </div>
                                    </Grid>
                                </Responsive>
                                <Responsive className="mt-two" maxWidth={780}>
                                    <Grid className="j-center">
                                        <div className="flex-box">
                                            <span className="txt-home">Employers</span>
                                            <Button primary className="btn-home" size="huge">Looking to hire?</Button>
                                        </div>
                                        <div className="flex-box">
                                            <span className="txt-home">Workers</span>
                                            <Button primary className="btn-home" size="huge">Looking for a job?</Button>
                                        </div>
                                    </Grid>
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
export default connect(mapStateToProps)(HomePage)