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
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path ="/" component={NewProspectPage}/>
          <Route path ="/ExistProspectPage" component={ExistProspectPage} />
	      </Switch>
	     </Router>
  )}
}

// <Route exact path ="/404" component= {NotFoundPage}/>
//
//  <Redirect to = "/404"/>
