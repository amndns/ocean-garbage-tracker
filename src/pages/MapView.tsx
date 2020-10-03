import React, { FunctionComponent } from 'react';
import { CircleMarker, Map, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView: FunctionComponent = () => {
  return (
    <Map center={{ lat: 10, lng: 10 }} zoom={2}>
      {' '}
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png	"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <CircleMarker center={[51.51, -0.12]} color="blue" radius={20}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
    </Map>
  );
};

export default MapView;
