import React, { Component } from 'react'
import NewProspectPage from './Pages/NewProspectPage'
import ExistProspectPage from './Pages/ExistProspectPage'


import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect
} from  "react-router-dom";

export default class extends Component {
  constructor(){
    super();
    this.state={
      prospectsArr:[]
    }
  }
  addProspect=(inputArr)=>{
    this.setState({prospectsArr:[...this.state.prospectsArr, inputArr]});
  }
  render(){
    return (
      <Router>


        <Switch>
          <Route
            exact
            path="/"
            render={props => <NewProspectPage addProspectFunc={this.addProspect} />}
          />
          <Route
            path="/ExistProspectPage"
            render={props => <ExistProspectPage {...props} prospectsArr={this.state.prospectsArr} />}
          />
        </Switch>



      </Router>
    )
  }
}

// <Route exact path ="/404" component= {NotFoundPage}/>
//
//  <Redirect to = "/404"/>
