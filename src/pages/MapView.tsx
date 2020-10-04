import React, { FunctionComponent } from 'react';
import { LatLngExpression } from 'leaflet';
import { CircleMarker, Map, Popup, TileLayer } from 'react-leaflet';
import GarbageDetail from '../components/GarbageDetail';
import * as data from '../data/data.json';
import 'leaflet/dist/leaflet.css';

const markersColor = '#1890FF';

const markers: LatLngExpression[] = data.data.map((d) => [d.lat, d.lng]);

const MapView: FunctionComponent = () => {
  return (
    <Map center={{ lat: 10, lng: 10 }} zoom={2}>
      {' '}
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png	"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((m) => (
        <CircleMarker center={m} radius={1} color={markersColor}>
          <Popup>
            <GarbageDetail />
          </Popup>
        </CircleMarker>
      ))}
      {/* <Polygon positions={markers[0]} >
        <Popup>
          <GarbageDetail />
        </Popup>
      </Polygon> */}
    </Map>
  );
};

export default MapView;
