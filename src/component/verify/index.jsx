import React, { Component } from 'react';
// import Navbar from ''
import axios from 'axios';
import apiUrl from "../../config.js"
import { Redirect } from 'react-router-dom';
import HomePage from '../homepage'

export default class Verify extends Component {
  componentWillMount() {
    const href = new URL(window.location.href)
    const url = new URLSearchParams(href.search)
    const token = url.get('token');
    console.log(token);
    axios.post(`${apiUrl}/api/verify`, token).then((res) => {
      console.log(res)
      if(res.data.success === true) {
        return <Redirect/>
      }
    }).catch((e) => {
      console.log(e)
    })
  }
  render() {
    return (
      <div>
        <HomePage/>
      </div>
    )
  }
}
