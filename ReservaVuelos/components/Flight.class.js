import React from 'react';

export class DocumentClass extends React.Component {
  constructor() {
    super(props);
    this.state = {
      iid: -1,
      fromCity: '',
      fromCountry: '',
      toCity: '',
      toCountry: '',
      flightDate: new Date(),
      passengers: -1,
    };
  }

  addData(data) {
    this.state.iid = data[0];
    this.state.fromCity = data[1];
    this.state.fromCountry = data[2];
    this.state.toCity = data[3];
    this.state.toCountry = data[4];
    this.state.flightDate = data[5];
    this.state.passengers = data[6];
  }

  async toFireStore() {
    await addDoc(collection(db, 'flight'), {
      iid: this.state.iid,
      fromCity: this.state.fromCity,
      fromCountry: this.state.fromCountry,
      toCity: this.state.toCity,
      toCountry: this.state.toCountry,
      flightDate: this.state.flightDate,
      passengers: this.state.passengers,
    });
  }
}
