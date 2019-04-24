import React,{Component} from  "react"
import {Link} from "react-router-dom"
import {  Dimmer, Header, Icon, Grid, List, Image, Label, Dropdown, Button, Divider, Responsive, GridColumn, GridRow, Input, Search,  } from 'semantic-ui-react'
import setAuthorizationToken from "../auth"
import Navmodal from "../ui/navmodal";
import classnames from "classnames"
import $ from "jquery"
import "./navbar.scss"
// import Subnav from "./subnav";
export default class Navbar extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false,
            toggleModal:false,
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
        this.toggleModal =this.toggleModal.bind(this)
        this.logout =this.logout.bind(this)
    }
   componentDidMount() {
       $(window).scrollTop(0)
      $(window).on("scroll",()=>{
         if($(window).scrollTop()>100){
            $('.xnav').addClass("shadowed")
           }
           else{
            $('.xnav').removeClass("shadowed")
    } 
       })
   }
    logout(e) {
		e.preventDefault();
        setAuthorizationToken(false);
		localStorage.clear();
		window.location.reload();
    }
    handleOpen(){ this.setState({ active: true })}
    handleClose(){this.setState({ active: false,toggleModal:false })}
    toggleModal(){this.setState({ toggleModal: true })}
    
    render(){
        var {auth} = this.props
        return(
            <div className={classnames("xnav")}>
            {this.state.toggleModal?<Navmodal {...this.props} handleClose={this.handleClose} logout={this.logout}/>:null}
            <Responsive minWidth="780">
            {auth.isAuthenticated ?
                <ul className="ul-nav">
                <li><Link to="/" className="brand-logo"> <Image src={`${process.env.PUBLIC_URL}/images/Reptability123.png`} size="tiny"/></Link> </li>
                <li><Search size="small" placeholder="search for freelancers"/> </li>
                <li><Link to="/my_jobs">My jobs</Link> </li>
                <li><Link to="/my_connection">My connection</Link></li>
                <li><Link to="/messaging">Messaging</Link></li>
                <li><Link to="/notification">Notification</Link></li>
                <li className="profile">
                <Dropdown trigger={<Image avatar src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} />} icon={null}>
                            <Dropdown.Menu >
                            <Dropdown.Item text={<Link to="/dashboard">My profile </Link>} />
                            <Dropdown.Item text={<Link to="/settings">Settings</Link>} />
                            <Dropdown.Item text={<Link to="/help">Help</Link>} />
                            <Dropdown.Item text={<a href="#" onClick={this.logout}>Log out</a>} />
                            </Dropdown.Menu>
                    </Dropdown>
                </li>
                </ul>
            :
             <ul className="ul-nav">
                <li><Link to="/" className="brand-logo"> <Image src={`${process.env.PUBLIC_URL}/images/Reptability123.png`} size="tiny"/></Link> </li>
                <li><Search size="small" placeholder="search for workers"/> </li>
                <li><Link to="/signin">Log in</Link> </li>
                <li><Link to="/signup/employer">Sign up</Link></li>
                <li><Button  color="blue" circular  content="Post a Job" style={{paddingLeft:"50px",paddingRight:"50px"}}/></li>
            </ul>}
            </Responsive>
            <Responsive maxWidth="780">
             <ul className="ul-nav">
                <li><Link to="/"><Icon name="building" /> Reptability</Link></li>
                <li>
               <Button icon="code "  onClick={this.toggleModal} basic/>
                </li>
            </ul>
            </Responsive>
            </div>
        )
    }
}