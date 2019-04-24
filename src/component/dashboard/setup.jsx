import React,{Component} from 'react'
import { Form } from 'semantic-ui-react'
import Uploadcv from '../ui/cvuploader';
import DatePicker from "react-datepicker";
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
            <Form style={{ backgroundColor: 'white' }} size="large">
                <Form.Group widths='equal'>
                    <Form.Input name="firstname" onChange={this.typing} fluid label='First name'   />
                    <Form.Input name="lastname" onChange={this.typing}   fluid label='Last name'/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input name="postalCode" onChange={this.typing} type="number" fluid label="Postal Code"/>
                    <Form.Input name="phoneNumber" onChange={this.typing} type="number" fluid label="Phone Number"/>
                </Form.Group>
                <Form.Select name="gender" onChange={this.typing} options={options} placeholder='Gender'  />
                <DatePicker
                    selected={this.state.birthDay}
                    onChange={this.handleChange}
                />
                <Uploadcv />
            </Form>
        )
    }
}

export default Setup;
