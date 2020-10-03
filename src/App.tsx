import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  GlobalOutlined,
  MailOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Divider } from 'antd';
import { Switch, Route, useLocation } from 'react-router-dom';

import Navigation from './components/Navigation';
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
  const location = useLocation();

  const [page, setPage] = useState('home');

  useEffect(() => {
    const link = location.pathname;
    const selected = menuItems.find((item) => item.link === link);

    if (selected) {
      setPage(selected.key);
    } else {
      setPage('home');
      window.location.assign('/');
    }
  }, [location]);

  return (
    <div className="App">
      <div className="App-nav">
        <Navigation pageKey={page} menuItems={menuItems} />
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
