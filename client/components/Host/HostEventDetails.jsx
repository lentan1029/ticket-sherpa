import React, { Component, PropTypes } from 'react';

export default class HostEventDetails extends Component {
  render() {
    const i = this.props.hostEvent.findIndex((event) =>
      event.eventName === this.props.params.eventName);
      const numAttendees = this.props.hostEvent[i].numAttendees;
      // const attendeesPaid = this.props.hostEvent[i].attendeesPaid;
      const quota = this.props.hostEvent[i].quota;
      const price = this.props.hostEvent[i].price;
      const eventName = this.props.hostEvent[i].eventName;
      const eventCreateDateTime = this.props.hostEvent[i].eventCreateDateTime;
      const eventStartDateTime = this.props.hostEvent[i].eventStartDateTime;
      const eventEndDateTime = this.props.hostEvent[i].eventEndDateTime;

    return (
      <div>
        <h3>Event Name: {eventName}</h3>
        {/* <h3>Attendees Paid: {attendeesPaid}</h3> */}
        <h3>Number of Attendees: {numAttendees}</h3>
        <h3>Quota: {quota}</h3>
        <h3>Price: {price}</h3>
        <h3>Event Create Date Time: {eventCreateDateTime}</h3>
        <h3>Event Start Date Time: {eventStartDateTime}</h3>
        <h3>Event End Date Time: {eventEndDateTime}</h3>
      </div>
    );
  }
}

HostEventDetails.propTypes = {
  hostEvent: PropTypes.arrayOf(PropTypes.shape({
    numAttendees: PropTypes.number.isRequired,
    // attendeesPaid: PropTypes.string.isRequired,
    quota: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    eventName: PropTypes.string.isRequired,
    eventCreateDateTime: PropTypes.string.isRequired,
    eventStartDateTime: PropTypes.string.isRequired,
    eventEndDateTime: PropTypes.string.isRequired,

  }).isRequired).isRequired,
};
