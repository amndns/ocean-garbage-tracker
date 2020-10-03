import React, { FunctionComponent } from 'react';
import { Button, Typography } from 'antd';
import 'leaflet/dist/leaflet.css';
import './ContactView.scss';

const email = 'admin@admin.com';

const ContactView: FunctionComponent = () => {
  const { Text, Title } = Typography;

  const onEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="Contact">
      <Title level={2}>Contact Us</Title>

      <Text>You can send us an email at </Text>
      <Button className="Contact-email" type="link" onClick={onEmailClick}>
        {email}
      </Button>
      <Text>.</Text>
    </div>
  );
};

export default ContactView;
