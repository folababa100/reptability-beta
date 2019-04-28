import React,{Component} from 'react'
import { Form } from 'semantic-ui-react'
import Uploadcv from '../ui/cvuploader';
import apiUrl from "../../config.js"
import axios from 'axios';
 
import "react-datepicker/dist/react-datepicker.css";


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]
  
class Setup extends Component{
    constructor(props) {
        super(props);
        this.state  = {
            birthDay: new Date(),
            gender: '',
            firstname: '',
            lastname: '',
            postalCode: 0,
            phoneNumber: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.typing = this.typing.bind(this);
    }
    onSubmit(e) {
        e.preventDefault()
        axios.post(`${apiUrl}/api/setup`, this.state).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
    }
    typing(e, data) {
        var name= data.name;
        this.setState({
          [name]: data.value
        })
    }
    handleChange(date) {
        this.setState({
          birthDay: date
        });
    }
    render(){
        return(
            <div>
                <Form style={{ backgroundColor: 'white' }} size="large">
                    <Uploadcv />
                </Form>
                <p className="level-steps">1 of 10</p>
            </div>
        )
    }
}

export default Setup;
