import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchEventsContainer from '../../containers/SearchEventsContainer';
import HomeEventsListContainer from '../../containers/HomeEventsListContainer';
// TODO: add reducer, similar to eventsList
import Events from '../Events/Events.jsx';

export default class Nav extends Component {
  render() {
    return (
      <div className="content">
        {/* <h1>Welcome to Ticket Sherpa</h1>
        <h4>Your one stop ticket shop</h4> */}
        {/* <Events /> */}
        <div className="home__image-container">
          <img src={require('../../styles/images/eventbrite_homepage_image.jpg')} />
        </div>

        <div className="home__search">
          <SearchEventsContainer />
        </div>

        <div className="home__events-title">
          <h2>Events</h2>
        </div>
          <HomeEventsListContainer />
      </div>
    );
  }
}
