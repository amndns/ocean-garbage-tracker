import React, { FunctionComponent } from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import { Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './Navigation.scss';

export interface MenuItem {
  key: string;
  link: string;
  icon: JSX.Element;
  title: string;
}

interface INavigationProps {
  pageKey: string;
  menuItems: ReadonlyArray<MenuItem>;
}

const Navigation: FunctionComponent<INavigationProps> = (props: {
  pageKey: string;
  menuItems: ReadonlyArray<MenuItem>;
}) => {
  const { Link: TextLink, Text, Title } = Typography;

  const { pageKey, menuItems } = props;

  return (
    <div>
      <div className="Navigation-title">
        <img className="Navigation-title-logo" src="../logo.png" alt="logo" />
        <Title level={2}>
          <Link to="/">Messages in Bottles</Link>
        </Title>
        <Text>
          Messages in Bottles is an online platform containing interactive
          visualizations and information on coastal plastic waste using remote
          sensing data from Sentinel-2.
        </Text>
      </div>
      <Menu selectedKeys={[pageKey]} mode="vertical">
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.link}>{item.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
      <div className="Navigation-footer">
        <Text className="Navigation-footer-text" type="secondary">
          This is a project made by Team Manila Bay Sands for the{' '}
        </Text>
        <TextLink className="Navigation-footer-text">
          Space Apps Challenge
        </TextLink>
        <Text className="Navigation-footer-text" type="secondary">
          . Made with{' '}
        </Text>
        <TextLink className="Navigation-footer-text">React</TextLink>
        <Text type="secondary" className="Navigation-footer-text">
          ,{' '}
        </Text>
        <TextLink className="Navigation-footer-text">Leaflet</TextLink>
        <Text type="secondary" className="Navigation-footer-text">
          , and{' '}
        </Text>
        <HeartTwoTone
          className="Navigation-footer-text"
          twoToneColor="#eb2f96"
        />
      </div>
    </div>
  );
};

export default Navigation;
