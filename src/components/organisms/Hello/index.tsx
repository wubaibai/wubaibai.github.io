import React from 'react';

import Hero from 'components/atoms/Hero';
import Header from 'components/organisms/Header';
import Section from 'components/molecules/Section';
import FaceIcon from 'images/icon/face.inline.svg';

import style from './index.css';

const Hello: React.FC = () => (
	<Section className={style.hello}>
		<Header />
		<Hero />
		<div className={style.face}>
			<FaceIcon />
		</div>
	</Section>
);

export default Hello;
