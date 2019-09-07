import React, { Component, Fragment } from 'react';



export default class extends Component {
  constructor(props){
    super();
    this.state = {
      popIt: this.deleteArr,
      style: 'visible',
    }
  }
  deleteArr = () => {this.setState({style:'none'})}

  render(){

    let p = 0;
    let renderArr = this.props.prospectsArr.map((prospect)=>{
        {p++};
        return(
          <div id="entryBorder" style={{display: this.state.style}}>
            <h5 id="entryTitles entryFont">Prospect Entry {p}</h5>
            <ul className="entry entryFont">
              <li className="entry entryFont">{prospect.jobTitle}</li>
              <li className="entry entryFont">{prospect.companyName}</li>
              <li className="entry entryFont">{prospect.urlAddress}</li>
              <li className="entry entryFont">{prospect.ContactName}</li>
              <li className="entry entryFont">{prospect.emailAddress}</li>
              <li className="entry entryFont">{prospect.linkedInName}</li>
              <li className="entry entryFont">{prospect.phone}</li>
            </ul>
            <button onClick={this.state.popIt}> Delete Prospect</button>
          </div>
        )
    }
  )
    return (
    <Fragment>
      <div className="list">{renderArr}</div>
    </Fragment>
  )}

}
