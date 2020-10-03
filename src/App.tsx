import React, { FunctionComponent, useState } from 'react';
import {
  DeleteOutlined,
  GlobalOutlined,
  MailOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Typography } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';

import ContactView from './pages/ContactView';
import FaqView from './pages/FaqView';
import MapView from './pages/MapView';
import 'antd/dist/antd.css';
import './App.scss';

const App: FunctionComponent = () => {
  const { Text, Title } = Typography;

  const [page, setPage] = useState('home');

  const handleClick = ({ key }: any) => {
    setPage(key);
  };

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
        <Menu selectedKeys={[page]} onClick={handleClick} mode="vertical">
          <Menu.Item key="home" icon={<GlobalOutlined />}>
            <Link to="/"> Map</Link>
          </Menu.Item>
          <Menu.Item key="faq" icon={<QuestionCircleOutlined />}>
            <Link to="/faq"> FAQ</Link>
          </Menu.Item>
          <Menu.Item key="contact" icon={<MailOutlined />}>
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
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
