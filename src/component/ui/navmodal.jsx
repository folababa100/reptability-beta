import React,{Component} from  "react"
import {Button, Grid, Icon, Accordion} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import setAuthorizationToken from "../auth"
export default class Navmodal extends Component{
    constructor(props){
        super(props)
        this.state = { activeIndex: 0 }
        this.logout = this.logout.bind(this)

    }
    logout(e) {
        // e.preventDefault();
        setAuthorizationToken(false);
        localStorage.clear();
        window.location.reload()
    }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }

    render(){
        const { activeIndex } = this.state
     
        return(
                <div className="navmodal" data-aos="fade-in">
                    <div >
                    <Grid columns="equal" container >
                        <Grid.Column>
                        <div style={{}} >
                        <h2>  <Icon name="cancel" style={{float:"right"}} className="xcursor" onClick={()=>this.props.handleClose()}/></h2>
                        </div>
                        </Grid.Column>
                    <Grid.Row >
                        <Grid.Column>
                            <Grid >
                                <Grid.Row data-aos="zoom-in" data-aos="zoom-in">
                                <Grid.Column>
                                <p>
                        <Link to="/" className="modal-link"> Home</Link>
                       </p>
                       <p>
                        <Link to="/contact" className="modal-link"> contact</Link>
                       </p>
                       <p>
                        {window.localStorage.getItem("reptoken") ? 
                        <Link  onClick={() => this.logout()} to="/" className="modal-link"> Logout</Link>
                        :<Link to="/signin" className="modal-link"> Signin</Link>}
                       </p>
                        <Accordion>
                            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                            Support center <Icon name="plus" style={{float:"right"}} size="small"/>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                            <p>
                            <Link to="/tos"><Icon name="chevron right" size="small"/> Terms of use </Link>
                            </p>
                            <p>
                            <Link to="/privacy_policy"><Icon name="chevron right" size="small"/> Privacy policy  </Link>
                            </p>
                            </Accordion.Content>

                            <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                            Help center <Icon name="plus" style={{float:"right"}} size="small"/>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                            <p>
                            <Link to="/about"><Icon name="chevron right" size="small"/>About us</Link>
                            </p>
                            <p>
                            <Link to="/contact"><Icon name="chevron right" size="small"/> Contact us</Link>
                            </p>
                            </Accordion.Content>
                        </Accordion>
                                </Grid.Column>
                                </Grid.Row>
                               
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                   </div>
                </div>
        )
    }
}