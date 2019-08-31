import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import ProspectList from '../Layouts/ProspectList';



export default class extends Component {
  render(){
    let p = 1

    let renderArr = this.props.prospectsArr.map((prospect)=>{
      {p++}
        return(
      <div>
          <h5 id="entryTitles">Prospect Entry {p}</h5>
          <ul className="entry">
            <li className="entry">{prospect.jobTitle}</li>
            <li className="entry">{prospect.companyName}</li>
            <li className="entry">{prospect.urlAddress}</li>
            <li className="entry">{prospect.ContactName}</li>
            <li className="entry">{prospect.emailAddress}</li>
            <li className="entry">{prospect.linkedInName}</li>
            <li className="entry">{prospect.phone}</li>
          </ul>
          </div>
        )
    })
    return (
    <Fragment>
      <div className="border">
        <div className="list" >{renderArr}</div>
      </div>
    </Fragment>
  )}
}
