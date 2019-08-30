import React, { Component, Fragment } from 'react';
import Navbar from '../Layouts/Navbar';
import Header from '../Layouts/Header';
import { Link } from "react-router-dom";
import ProspectList from '../Layouts/ProspectList';



export default class extends Component {


  render(){

    return (
    <Fragment>
      <Header />
      <MakeSpace />
      <Navbar />
    </Fragment>
  )}
}


 const MakeSpace = () => {
   return <div> hello</div>
 }
