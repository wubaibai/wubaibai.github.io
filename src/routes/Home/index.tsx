import React from 'react';
import { hot } from 'react-hot-loader/root';

import Section from 'components/molecules/Section';
import Hello from 'components/organisms/Hello';
import About from 'components/organisms/About';

// import styles from './index.css';

const Home: React.FC = () => (
	<div>
		<Hello />
		<About />
		<Section>SKILL</Section>
		<Section>SIDE-PROJECT</Section>
		<Section>WORK EXPERIENCE</Section>
	</div>
);

export default hot(Home);
