import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  DeleteOutlined,
  GlobalOutlined,
  MailOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Typography } from 'antd';
import { Switch, Route, Link, useLocation } from 'react-router-dom';

import ContactView from './pages/ContactView';
import FaqView from './pages/FaqView';
import MapView from './pages/MapView';
import 'antd/dist/antd.css';
import './App.scss';

const menuItems = [
  { key: 'home', link: '/', icon: <GlobalOutlined />, title: 'Map' },
  {
    key: 'faq',
    link: '/faq',
    icon: <QuestionCircleOutlined />,
    title: 'FAQ',
  },
  {
    key: 'contact',
    link: '/contact',
    icon: <MailOutlined />,
    title: 'Contact Us',
  },
];

const App: FunctionComponent = () => {
  const { Text, Title } = Typography;
  const location = useLocation();

  const [page, setPage] = useState('home');

  useEffect(() => {
    const link = location.pathname;
    const selected = menuItems.find((item) => item.link === link);

    if (selected) {
      setPage(selected.key);
    } else setPage('home');
  }, [location]);

  return (
    <div className="App">
      <div className="App-nav">
        <div className="App-nav-title">
          <DeleteOutlined className="App-nav-icon" />
          <Title level={2}>
            <Link to="/">Ocean Garbage Tracker</Link>
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            elementum nec justo in mattis. Duis enim leo, euismod non nulla eu,
            porta gravida felis.
          </Text>
        </div>
        <Menu selectedKeys={[page]} mode="vertical">
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.link}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <div className="App-nav-footer">
          <Text className="App-nav-footer-text" type="secondary">
            This is a Space Apps Challenge 2020 Project made by Team Manila Bay
            Sands
          </Text>
        </div>
      </div>
      <Divider className="App-divider" type="vertical" />

      <div className="App-content">
        <Switch>
          <Route exact path="/">
            <MapView />
          </Route>
          <Route path="/faq">
            <FaqView />
          </Route>
          <Route path="/contact">
            <ContactView />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
