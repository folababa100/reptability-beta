import React,{Component} from "react"
import apiUrl from '../../../config';
import ReactDropzone from 'react-dropzone';
import { Icon, Segment, Image, Grid, Form } from "semantic-ui-react";
import axios from "axios"
import "./cvuploader.scss"
export default class Uploadcv extends Component{
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
        <div style={{ marginTop: '1rem', border: 'none' }} className="uploadcv" loading={this.state.isLoading}>
           {this.state.files.length ?
           
        <Grid columns="3">
        <Grid.Column ></Grid.Column>
        { this.state.files.map((file) => (
               <Grid.Column >
                <div style={{ textAlign: 'center' }}>
                  <Icon name="file pdf outline" size="huge"/>
                  {this.state.success === true && this.state.isLoading === false ? (
                    <p>CV upload was a success</p>
                  ) : (
                    <p>Drag or Drop to upload Resume</p>
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
           accept="application/pdf"
           onDrop={this.onDrop}
           name="item"
        >
        {({getRootProps, getInputProps}) => (
            <div className="imageupload2" {...getRootProps()}>
              <input {...getInputProps()} />
                <div style={{ textAlign: "center"  }}>
                    
                    <p style={{ fontSize: '1.5rem', fontWeight: '600' }}>Upload Resume</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#aab7c1' }}>Attach your profile to make your resume standout.</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#aab7c1', fontStyle: 'italic' }}>Only pdf files allowed</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#309bbb', marginTop: '2rem', marginBottom: '13rem' }}>Upload</p>
                    <p style={{ fontWeight: '600', color: '#aab7c1' }}>If you don't have a resume, Reptability will generate one for you based on your answers. You can save it and send it to yourself to keep</p>
                    <p style={{ fontSize: '1.3rem', fontWeight: '600', color: '#309bbb' }}>View generated resume</p>
                </div>
            </div>
          )}
        </ReactDropzone>
          }
          </div>
    );
  }
}