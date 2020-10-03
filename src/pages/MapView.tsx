import React, { FunctionComponent } from 'react';
import { LatLngExpression } from 'leaflet';
import { Map, Polygon, Popup, TileLayer } from 'react-leaflet';
import GarbageDetail from '../components/GarbageDetail';
import 'leaflet/dist/leaflet.css';

const markersColor = '#1890FF';

const latlngs: LatLngExpression[] = [
  [37, -109.05],
  [37, -119.03],
  [41, -129.03],
  [41, -102.05],
  [37, -102.04],
];

const MapView: FunctionComponent = () => {
  return (
    <Map center={{ lat: 10, lng: 10 }} zoom={2}>
      {' '}
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png	"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polygon positions={latlngs} color={markersColor}>
        <Popup>
          <GarbageDetail />
        </Popup>
      </Polygon>
    </Map>
  );
};

export default MapView;
