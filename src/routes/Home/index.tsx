import React from 'react';
import { hot } from 'react-hot-loader/root';

import Section from 'components/molecules/Section';
import Hello from 'components/organisms/Hello';

// import styles from './index.css';

const Home: React.FC = () => (
	<div>
		<Hello />
		<Section>ABOUT</Section>
		<Section>SKILL</Section>
		<Section>SIDE-PROJECT</Section>
		<Section>WORK EXPERIENCE</Section>
	</div>
);

export default hot(Home);
