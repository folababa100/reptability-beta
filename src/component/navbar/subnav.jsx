import React,{Component} from  "react"
import {Link} from "react-router-dom"
import {  Dimmer, Header, Icon, Grid, List, Image, Label, Dropdown, Button, Divider, Responsive, GridColumn, GridRow, Input, Search,  } from 'semantic-ui-react'
import "./navbar.scss"
export default class Subnav extends Component{
    constructor(props){
        super(props)
        this.state ={
        }
    
    }
   componentDidMount() {
   
   }
   
    render(){
        var links = [
            {title:"Graphics & Design",link:"web-dev"},
            {title:"Digital Marketing",link:"web-dev"},
            {title:"Writing & Translation",link:"web-dev"},
            {title:"VIdeo & Animation",link:"web-dev"},
            {title:"Progamming & Tech",link:"web-dev"},
            {title:"Business",link:"web-dev"},
            {title:"Life Style",link:"web-dev"},
            
    ]
        return(
            <div className="subnav">
            <Grid container>
                <Grid.Column>
                {links.map((link)=>(
                    <Link to={`/${link.link}`}> {link.title} </Link>
                ))}
                </Grid.Column>
            </Grid>
            </div>

        )
    }
}