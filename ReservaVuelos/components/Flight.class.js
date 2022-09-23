import React from 'react';
import firebase from '../database-service/ReservacionVuelos.service';

export default class FlightClass extends React.Component {
  constructor(
    iid,
    fromCity,
    fromCountry,
    toCity,
    toCountry,
    flightDate,
    passengers,
  ) {
    super();
    this.iid = iid;
    this.fromCity = fromCity;
    this.fromCountry = fromCountry;
    this.toCity = toCity;
    this.toCountry = toCountry;
    this.flightDate = flightDate;
    this.passengers = passengers;
  }

  toFireStore() {
    FlightToFireStore(this);
  }
}
