import React, { FunctionComponent, useState } from 'react';
import { Card, Switch, Typography } from 'antd';
import { LatLngTuple } from 'leaflet';
import { CircleMarker, Map, Popup, TileLayer } from 'react-leaflet';
import HeatMapLayer from 'react-leaflet-heatmap-layer';
import GarbageDetail from '../components/GarbageDetail';
import 'leaflet/dist/leaflet.css';
import data from './sample_heatmap';
import './MapView.scss';

const markersColor = '#1890FF';

const markers: LatLngTuple[] = data.map((d) => [d.lat, d.lng]);

const MapView: FunctionComponent = () => {
  const { Text } = Typography;

  const [showHeatMap, setShowHeatMap] = useState(true);
  const [showCircleMarkers, setShowCircleMarkers] = useState(true);

  const onSwitchShowHeatMap = () => setShowHeatMap(!showHeatMap);
  const onShowCircleMarkers = () => setShowCircleMarkers(!showCircleMarkers);

  return (
    <div>
      <Card className="MapView-card" size="small">
        <div className="MapView-filter">
          <Text className="MapView-filter-text">Heat Map</Text>
          <Switch defaultChecked onChange={onSwitchShowHeatMap} />
        </div>
        <Text className="MapView-filter-text">Circle Markers</Text>
        <Switch defaultChecked onChange={onShowCircleMarkers} />
      </Card>
      <Map center={{ lat: 0, lng: 0 }} zoom={2}>
        {' '}
        {showHeatMap && (
          <HeatMapLayer
            points={data as any}
            longitudeExtractor={(point: any) => point.lng}
            latitudeExtractor={(point: any) => point.lat}
            intensityExtractor={(point: any) => point.count}
          />
        )}
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png	"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showCircleMarkers &&
          markers.map((m) => (
            <CircleMarker center={m} radius={5} color={markersColor}>
              <Popup>
                <GarbageDetail latitude={m[0]} longitude={m[1]} />
              </Popup>
            </CircleMarker>
          ))}
      </Map>
    </div>
  );
};

export default MapView;
