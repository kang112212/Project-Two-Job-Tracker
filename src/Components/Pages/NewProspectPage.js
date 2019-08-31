import React, { Component, Fragment } from 'react'
import Navbar from '../Layouts/Navbar'
import Form from '../Layouts/Form'
import Header from '../Layouts/Header'
import { Link } from "react-router-dom";



export default class extends Component {
    constructor(props){
        super(props);
    }


  render(){
    return (
    <Fragment>
    
      <Form addProspectFunc={this.props.addProspectFunc}/>

    </Fragment>
  )}
}
