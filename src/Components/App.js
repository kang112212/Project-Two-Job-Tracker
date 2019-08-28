import React, { Component, Fragment } from 'react'
import Navbar from './Layouts/Navbar'
import Form from './Layouts/Form'
import Icons from './Layouts/Icons'
import Header from './Layouts/Header'
import Exercises from './Exercises'






export default class extends Component {


  render(){
    return (
    <Fragment id="container">
      <Header />
      <Form />
      <Exercises />
      <Navbar />
    </Fragment>
  )}
}
