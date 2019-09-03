import React, { Component, Fragment } from 'react'
import Form from '../Layouts/Form'





export default class extends Component {

  render(){
    return (
    <Fragment>
      <Form addProspectFunc={this.props.addProspectFunc}/>
    </Fragment>
    )
  }
}
