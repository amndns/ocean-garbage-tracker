import React, { Component } from 'react';
import { CircleMarker, Map, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 10, lng: 10 },
      zoom: 2,
    };
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <Map center={currentLocation} zoom={zoom}>
        {' '}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <CircleMarker center={[51.51, -0.12]} color="black" radius={20}>
            <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
      </Map>
    );
  }
}

export default MapView;
