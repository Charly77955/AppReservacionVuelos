import React from 'react';
import {saveFlight} from '../database-service/ReservacionVuelos.service';

export default class FlightClass extends React.Component {
  constructor(
    fromCity,
    fromCountry,
    toCity,
    toCountry,
    flightDate,
    passengers,
  ) {
    super();
    this.fromCity = fromCity;
    this.fromCountry = fromCountry;
    this.toCity = toCity;
    this.toCountry = toCountry;
    this.flightDate = flightDate;
    this.passengers = passengers;
  }

  toFireStore() {
    saveFlight(this);
  }
}
