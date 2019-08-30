import React, { Component, Fragment } from 'react';
import Navbar from '../Layouts/Navbar';
import Header from '../Layouts/Header';
import { Link } from "react-router-dom";
import ProspectList from '../Layouts/ProspectList';



export default class extends Component {

  render(){
    let renderArr = this.props.prospectsArr.map((prospect)=>{
      console.log(prospect.jobTitle)
        return <div>{prospect.jobTitle}</div>
    })
    return (
    <Fragment>
      <Header />
      <div>space </div>

      <div>{renderArr}</div>

      <Navbar />
    </Fragment>
  )}
}
