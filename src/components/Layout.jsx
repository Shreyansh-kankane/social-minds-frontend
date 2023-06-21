import React, { Component } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default class Layout extends Component {

    render() {
    return (
      <div> 
          <LoadingBar height='5px' color='#f11946' progress={this.props.progress} /> 
          <Navbar/>
          <Outlet/>
      </div>
    )
  }
};

