import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Map.css';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 51.513470,
         lng: -0.031370,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCttWTrHqV5jh9xNaXgWua4JKQPRQDRXhQ'
})(MapContainer);