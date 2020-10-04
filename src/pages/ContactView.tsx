import React, { FunctionComponent } from 'react';
import { Avatar, Button, Typography } from 'antd';
import 'leaflet/dist/leaflet.css';
import './ContactView.scss';

import adelPicture from '../static/profile-adel.jpg';
import celinePicture from '../static/profile-celine.jpg';
import luigiPicture from '../static/profile-luigi.png';
import luisPicture from '../static/profile-luis.jpg';
import pacoPicture from '../static/profile-paco.png';
import pioPicture from '../static/profile-pio.jpeg';

const members = [
  {
    name: 'Luigi Del Rosario',
    email: 'luigidr97@gmail.com',
    avatar: luigiPicture,
  },
  {
    name: 'Luis Flores',
    email: 'luismigflores.21@gmail.com',
    avatar: luisPicture,
  },
  {
    name: 'Pio Fortuno III ',
    email: 'plfortuno@up.edu.ph',
    avatar: pioPicture,
  },
  {
    name: 'Adel Mandanas',
    email: 'mandanas.adel@gmail.com',
    avatar: adelPicture,
  },
  {
    name: 'Celine Moredo',
    email: 'camoredo@gmail.com',
    avatar: celinePicture,
  },
  {
    name: 'Paco Pama',
    email: 'pama.p.aa@m.titech.ac.jp',
    avatar: pacoPicture,
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
          <Avatar
            className="Contact-details-picture"
            shape="square"
            size={64}
            src={m.avatar}
          />
          <div>
            <Text strong>{m.name}</Text>
            <br />
            <Button
              className="Contact-details-email"
              type="link"
              onClick={() => onEmailClick(m.email)}
            >
              {m.email}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactView;
