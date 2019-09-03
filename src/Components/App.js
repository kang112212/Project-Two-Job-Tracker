import React, { Component } from 'react';
import NewProspectPage from './Pages/NewProspectPage';
import ExistProspectPage from './Pages/ExistProspectPage';
import Navbar from './Layouts/Navbar';
import Header from './Layouts/Header';


import {
	BrowserRouter as Router,
	Route,
	Switch,
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

				<Header />
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
				<Navbar />

      </Router>
    )
  }
}
