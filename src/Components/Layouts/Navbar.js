import React, { Component } from 'react';
import ExistProspectPage from '../Layouts/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { spinner } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


export default class extends Component {
render(){
  return (
    <div>
      <Link to={{
        pathname: '/ExistProspectPage',
        state: {
          dataFromAbout: ["Jon Snow", "Peter Parker", "Clark Kent"]
        }}}>
        <button> Existing Prospects</button>
      </Link>

      <Link to={{
      pathname: '/',
      }}>
        <button>New Prospects</button>
      </Link>
    </div>
    )
  }
}
