import React, { FunctionComponent } from 'react';
import { SendOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import 'leaflet/dist/leaflet.css';
import './ContactView.scss';

const members = [
  {
    name: 'Adel Mandanas',
    email: 'mandanas.adel@gmail.com',
  },
  {
    name: 'Celine Moredo',
    email: 'camoredo@gmail.com',
  },
  {
    name: 'Paco Pama',
    email: 'pama.p.aa@m.titech.ac.jp',
  },
  {
    name: 'Luis Flores',
    email: 'luismigflores.21@gmail.com',
  },
  {
    name: 'Luigi Del Rosario',
    email: 'luigidr97@gmail.com',
  },
  {
    name: 'Pio Fortuno III ',
    email: 'plfortuno@up.edu.ph',
  },
];

const ContactView: FunctionComponent = () => {
  const { Text, Title } = Typography;

  const onEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="Contact">
      <Title level={2}>Contact Us</Title>

      <Text>You can send an email to the members of the core team:</Text>
      {members.map((m) => (
        <div className="Contact-details">
          <SendOutlined className="Contact-details-bullet" />
          <Text>{m.name} - </Text>
          <Button
            className="Contact-details-email"
            type="link"
            onClick={() => onEmailClick(m.email)}
          >
            {m.email}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ContactView;
