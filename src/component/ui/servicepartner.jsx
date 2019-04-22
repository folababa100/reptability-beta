
import React,{Component} from  "react"
import {Button,Embed, Dimmer, Header, Icon, Step ,Input, Form, TextArea, Grid, Divider, Image, ImageGroup, Card, Responsive, GridColumn, TransitionablePortal, Segment, Select} from 'semantic-ui-react'
import Axios from "axios";
import apiUrl from "../../config"
import { Tab } from 'semantic-ui-react'
import Serviceform from "../forms/serviceform";

export default  class Servicepartner extends Component{
    constructor(props){
        super(props)
        this.state={
          active:false,
          firstName:"",
          lastName:"",
          email:"",
          phone:"",
          message:"",
          country:"",
          isLoading:false,
          error:"",
          cc:"",
          success:""
      }
      this.typing=this.typing.bind(this)
      this.submit=this.submit.bind(this)
    }
    componentWillMount() {
      Axios.get("https://ipapi.co/json").then((res)=>{
         this.setState({country:res.data.country_name,cc:res.data.country.toLowerCase()})
      })
    }
 
    typing(e,data){
      this.setState({[data.name]:data.value})
    }

   submit(){
    this.setState({isLoading:true,error:"",success:""});
    Axios.post(`${apiUrl}/api/contact`,this.state).then((res)=>{
      if(res.data.success){
        this.setState({success:res.data.success,error:"",email:"",phone:"",message:"",firstName:"",lastName:"",isLoading:false})
      }else this.setState({error:"An error has occured. please try again",isLoading:false})
    }).catch((err)=>this.setState({error:"An error has occured. please try again",isLoading:false}))
   }
    render(){

const panes = [
    { menuItem: 'Service providing organization', render: () => <Tab.Pane attached={false}><Serviceform /></Tab.Pane> },
    { menuItem: 'Self Employed Technician', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Individuals', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
  ]
  
        return(
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
               
        )
    }
}
