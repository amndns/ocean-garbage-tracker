import React, { FunctionComponent } from 'react';
import { LatLngExpression } from 'leaflet';
import { CircleMarker, Map, Popup, TileLayer } from 'react-leaflet';
import HeatMapLayer from 'react-leaflet-heatmap-layer';
import GarbageDetail from '../components/GarbageDetail';
import 'leaflet/dist/leaflet.css';
import data from './sample_heatmap';

const markersColor = '#1890FF';

const markers: LatLngExpression[] = data.map((d) => [d.lat, d.lng]);

const MapView: FunctionComponent = () => {
  return (
    <Map center={{ lat: 0, lng: 0 }} zoom={2}>
      {' '}
      <HeatMapLayer
        points={data as any}
        longitudeExtractor={(point: any) => point.lng}
        latitudeExtractor={(point: any) => point.lat}
        intensityExtractor={(point: any) => point.count}
      />
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
    </Map>
  );
};

export default MapView;
