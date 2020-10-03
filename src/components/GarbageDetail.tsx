import React, { FunctionComponent } from 'react';
import { Typography } from 'antd';
import 'leaflet/dist/leaflet.css';

const GarbageDetail: FunctionComponent = () => {
  const { Text, Title } = Typography;

  return (
    <div>
      <Title level={5}>Garbage</Title>
      <Text>
        Cool cool Cool cool Cool cool Cool cool Cool cool cool Cool cool Cool
        cool cool Cool cool Cool cool
      </Text>
    </div>
  );
};

export default GarbageDetail;
