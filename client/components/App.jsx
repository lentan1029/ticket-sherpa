import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

// renders logo and maps props

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1><Link to={'/'}>Ticket Sherpa</Link></h1>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
