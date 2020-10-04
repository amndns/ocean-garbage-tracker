import React, { FunctionComponent } from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './FaqView.scss';

const FaqView: FunctionComponent = () => {
  const { Link: TextLink, Text, Title } = Typography;

  return (
    <div className="Faq">
      <Title level={2}>FAQ</Title>

      <Title level={4}>What is Messages in Bottles?</Title>
      <Text>
        Messages in Bottles (WIP) is an online platform containing interactive
        visualizations and information on coastal plastic waste using remote
        sensing data from Sentinel-2. Inspired by the work of Dr. Biermen, Dr.
        Clewley, Dr. Martinez-Vicente, and Dr. Topouzelis entitled “Finding
        Plastic Patches in Coastal Waters using Optical Satellite Data”, this
        project bridges the gap between their research and the general public in
        the interest of providing a full picture on the severity of this problem
        to everyone. The overarching goal of Messages in Bottles (WIP) is to
        provide a hub for researchers in the field of marine environmental
        science to display their work in a visual and easily digestible format
        for the public to learn from.
      </Text>
      <br />
      <br />
      <Text>
        This project was developed as an entry to the NASA Space Apps 2020
        Challenge by a group of six young researchers based in Metro Manila and
        Japan.
      </Text>
      <Title level={4}>
        What was the research paper that heavily inspired this project?
      </Title>
      <Text>
        The paper entitled “Finding Plastic Patches in Coastal Waters using
        Optical Satellite Data” was written by Dr. Lauren Biermann, Dr. Daniel
        Clewley, Dr. Victor Martinez-Vicente, and Dr. Konstantinos Topouzelis.
        It was published on Nature, and you can read about it{' '}
      </Text>
      <TextLink href="https://www.nature.com/articles/s41598-020-62298-z">
        here
      </TextLink>
      <Text>.</Text>
      <br />
      <br />
      <Text>
        In their paper, they developed a novel Floating Debris Index to identify
        suspected floating plastic waste in coastal waters. They then trained a
        Naive Bayes classifier to determine plastic waste from suspected
        clusters (since they can be mixed in with naturally occurring materials
        like seaweed) with an accuracy of 86%. They applied their methods to
        various regions of interest, some of which are visualized on this
        platform. They showed for the first time that floating patches of
        macroplastics are detectable in optical data from the European Space
        Agency (ESA) Sentinel-2 satellites.
      </Text>
      <Title level={4}>Does this track the plastic waste in real time?</Title>
      <Text>
        Not at the moment. Messages in Bottles only displays where suspected
        floating plastic waste was detected in regions of interest. However, in
        line with the overarching goal of bringing research to the public, this
        platform was built for collaboration and expansion. Time-series
        prediction, more regions of interest, and increased visual filters are
        just some of the future plans of the team. Any marine environmental
        science research is also welcome to have their data visualized for
        public consumption.
      </Text>

      <Title level={4}>
        I’m a researcher. How do I contribute to this project?
      </Title>
      <Text>
        Simply contact any of the members of the core team. You can find their
        contact details{' '}
      </Text>
      <Button className="Faq-email" type="link">
        <Link to="/contact">here</Link>
      </Button>
      <Text>.</Text>
    </div>
  );
};

export default FaqView;
