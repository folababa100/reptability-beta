

import React,{Component} from "react"
import apiUrl from '../../../config';
import ReactDropzone from 'react-dropzone';
import { Icon, Segment, Image, Grid, Form } from "semantic-ui-react";
import axios from "axios"
import "../cvuploader/cvuploader.scss"
export default class Profilepics extends Component{
 constructor(props){
   super(props)
   this.state={
    files:[],
    isLoading:false,
    error:""
  }
    this.onDrop = this.onDrop.bind(this)
 }
 componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview))
  }
  onDrop  (files) {
    // POST to a test endpoint for demo purposes
    this.setState({
        files: this.state.files.concat(files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          }))),
        isLoading: true, error:""
       });
       files.forEach(file => {
        var formData = new FormData();
        formData.append("file", file);
        axios.post(`${apiUrl}/api/uploadFile`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then((res)=>{
            console.log(res)
            if(res.data.file){
                    this.setState({isLoading:false,success:true})
                }
        })
    })
    
  }

  render() {
    return (
        <div style={{ marginTop: '1rem' }} className="uploadcv" loading={this.state.isLoading}>
           {this.state.files.length ?
           
        <Grid columns="3">
        <Grid.Column ></Grid.Column>
        { this.state.files.map((file) => (
               <Grid.Column >
                <div style={{ textAlign: 'center' }}>
                  <Icon name="file pdf outline" size="huge"/>
                  {this.state.success === true && this.state.isLoading === false ? (
                    <p>Profile picture upload was a success</p>
                  ) : (
                    <p>Drag or Drop to upload profile picture</p>
                  )}
                </div>
               </Grid.Column>
          ))
        }
        <Grid.Column ></Grid.Column>
           </Grid>
        :
        <ReactDropzone
            multiple={false}
           accept="image/*"
           onDrop={this.onDrop}
           name="item"
        >
        {({getRootProps, getInputProps}) => (
            <div className="imageupload2" {...getRootProps()}>
              <input {...getInputProps()} />
                <div style={{ textAlign: "center"  }}>
                    <Icon name="image outline" size="huge"/>
                    <p>Drag or Drop to upload profile picture</p>
                </div>
            </div>
          )}
        </ReactDropzone>
          }
          </div>
    );
  }
}