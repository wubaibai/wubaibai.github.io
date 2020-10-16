import React from 'react';
import { hot } from 'react-hot-loader/root';

import Section from 'components/molecules/Section';
import Hello from 'components/organisms/Hello';
import About from 'components/organisms/About';
import Skill from 'components/organisms/Skill';
import SideProject from 'components/organisms/SideProject';

// import styles from './index.css';

const Home: React.FC = () => (
	<div>
		<Hello />
		<About />
		<Skill />
		<SideProject />
		<Section>WORK EXPERIENCE</Section>
	</div>
);

export default hot(Home);
