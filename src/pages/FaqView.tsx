import React, { FunctionComponent } from 'react';
import { Typography } from 'antd';
import 'leaflet/dist/leaflet.css';
import './FaqView.scss';

const FaqView: FunctionComponent = () => {
  const { Title } = Typography;

  return (
    <div className="Faq">
      <Title level={2}>FAQ</Title>
    </div>
  );
};

export default FaqView;
