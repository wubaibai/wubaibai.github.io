import React from 'react';
import { hot } from 'react-hot-loader/root';

import Logo from 'components/atoms/Logo';
import Hello from 'components/organisms/Hello';
import About from 'components/organisms/About';
import Skill from 'components/organisms/Skill';
import SideProject from 'components/organisms/SideProject';
import WorkExperience from 'components/organisms/WorkExperience';

import style from './index.css';

const Home: React.FC = () => (
	<div>
		<Hello />
		<About />
		<Skill />
		<SideProject />
		<WorkExperience />
		<div className={style.footer}>
			<Logo />
		</div>
	</div>
);

export default hot(Home);
