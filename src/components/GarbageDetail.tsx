import React, { FunctionComponent } from 'react';
import { Typography } from 'antd';
import 'leaflet/dist/leaflet.css';
import * as formatcoords from 'formatcoords';

interface IGarbageDetailProps {
  latitude: number;
  longitude: number;
}

const GarbageDetail: FunctionComponent<IGarbageDetailProps> = (props: {
  latitude: number;
  longitude: number;
}) => {
  const { Text } = Typography;

  const { latitude, longitude } = props;

  return <Text>{formatcoords(latitude, longitude).format()}</Text>;
};

export default GarbageDetail;
