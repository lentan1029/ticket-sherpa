import React, { Component, PropTypes } from 'react';
import QRCodeLib from 'qrcode';
import axios from 'axios'

export default class HostEventDetails extends Component {

  getAttendees(contractAddress) {
    const account = web3.eth.coinbase;
    const abi = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"attendeesPaid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"eventEndDateTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"eventStartDateTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"organizer","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"zipPostalCode","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"eventName","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"addressLine2","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"addressLine1","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numAttendees","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attendee","type":"address"}],"name":"verifyAttendee","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getNumAttendees","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"quota","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"country","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"eventCreateDateTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"image","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"buyTicket","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"city","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"_organizer","type":"address"},{"name":"_eventName","type":"string"},{"name":"_price","type":"uint256"},{"name":"_quota","type":"uint256"},{"name":"_eventCreateDateTime","type":"uint256"},{"name":"_eventStartDateTime","type":"uint256"},{"name":"_eventEndDateTime","type":"uint256"},{"name":"_description","type":"string"},{"name":"_addressLine1","type":"string"},{"name":"_addressLine2","type":"string"},{"name":"_city","type":"string"},{"name":"_state","type":"string"},{"name":"_zipPostalCode","type":"string"},{"name":"_country","type":"string"},{"name":"_image","type":"string"}],"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_numAttendees","type":"uint256"}],"name":"PurchaseTicket","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"RefundTicket","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amountSent","type":"uint256"},{"indexed":false,"name":"_price","type":"uint256"}],"name":"InsufficientEther","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_organizer","type":"address"},{"indexed":false,"name":"_numAttendees","type":"uint256"},{"indexed":false,"name":"_quota","type":"uint256"},{"indexed":false,"name":"_price","type":"uint256"},{"indexed":false,"name":"_eventName","type":"string"},{"indexed":false,"name":"_eventCreateDateTime","type":"uint256"},{"indexed":false,"name":"_eventStartDateTime","type":"uint256"},{"indexed":false,"name":"_eventEndDateTime","type":"uint256"},{"indexed":false,"name":"_description","type":"string"}],"name":"CreateEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_numAttendees","type":"uint256"},{"indexed":false,"name":"_quota","type":"uint256"}],"name":"ExceedQuota","type":"event"}]
    const contract = web3.eth.contract(abi).at(contractAddress);

    contract.getNumAttendees({},function (err, result) {
      if (!err) {
        console.log('Result: ', parseInt(result));
      } else {
        console.dir('Error: ', arguments);
      }
    });
  }

  render() {
    const i = this.props.hostEvent.findIndex((event) =>
      event.eventName === this.props.params.eventName);

    // event info
    const eventName = this.props.hostEvent[i].eventName;
    const description = this.props.hostEvent[i].description;
    const image = this.props.hostEvent[i].image;
    const price = this.props.hostEvent[i].price;
    const eventStartDateTime = this.props.hostEvent[i].eventStartDateTime;
    const eventEndDateTime = this.props.hostEvent[i].eventEndDateTime;

    // event address
    const addressLine1 = this.props.hostEvent[i].addressLine1;
    const addressLine2 = this.props.hostEvent[i].addressLine2;
    const city = this.props.hostEvent[i].city;
    const zipPostalCode = this.props.hostEvent[i].zipPostalCode;
    const state = this.props.hostEvent[i].state;
    const country = this.props.hostEvent[i].country;

    // host info
    const hostname = this.props.hostEvent[i].hostname;
    const eventContractAddress = this.props.hostEvent[i].eventContractAddress;
    const quota = this.props.hostEvent[i].quota;
    const id = this.props.hostEvent[i].id;
    const eventCreateDateTime = this.props.hostEvent[i].eventCreateDateTime;
    const createdAt = this.props.hostEvent[i].createdAt;
    const updatedAt = this.props.hostEvent[i].updatedAt;
    // const numAttendees = this.props.hostEvent[i].numAttendees;
    // const attendeesPaid = this.props.hostEvent[i].attendeesPaid;

    return (
      <div>
        <h2>Event Info</h2>
        <h4>Event Name: {eventName}</h4>
        <h4>Description: {description}</h4>
        <h4>Image: {image}</h4>
        <h4>Price: {price}</h4>
        <h4>Event Start Date & Time: {eventStartDateTime}</h4>
        <h4>Event End Date & Time: {eventEndDateTime}</h4>
        <hr></hr>

        <h2>Event Address</h2>
        <h4>Address Line 1: {addressLine1}</h4>
        <h4>Address Line 2: {addressLine2}</h4>
        <h4>City: {city}</h4>
        <h4>Zip Code: {zipPostalCode}</h4>
        <h4>State: {state}</h4>
        <h4>Country: {country}</h4>
        <hr></hr>

        <h2>Host Info</h2>
        <h4>Host Username: {hostname}</h4>
        <h4>Event Contract Address: {eventContractAddress}</h4>
        <h4>Quota: {quota}</h4>
        <h4>ID: {id}</h4>
        <h4>Event Create Date Time: {eventCreateDateTime}</h4>
        <h4>Created At: {createdAt}</h4>
        <h4>Updated At: {updatedAt}</h4>

        <input type="submit" value="View Number Of Attendees" onClick={this.getAttendees.bind(this, eventContractAddress)}></input>
        <p></p>
        <canvas ref="userVerifyQR"></canvas>
      </div>
    );
  }
}

HostEventDetails.propTypes = {
  hostEvent: PropTypes.arrayOf(PropTypes.shape({
    quota: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    eventName: PropTypes.string.isRequired,
    eventCreateDateTime: PropTypes.string.isRequired,
    eventStartDateTime: PropTypes.string.isRequired,
    eventEndDateTime: PropTypes.string.isRequired,

  }).isRequired).isRequired,
};
