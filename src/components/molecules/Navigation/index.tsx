import React from 'react';
import Nav from 'components/atoms/Nav';

import style from './index.css';

const Navigator: React.FC = () => (
	<nav className={style.navigation}>
		<ul>
			<li>
				<Nav to="#about" section="about">ABOUT</Nav>
			</li>
			<li>
				<Nav to="#skill" section="skill">SKILL</Nav>
			</li>
			<li>
				<Nav to="#side-project" section="side-project">SIDE-PROJECT</Nav>
			</li>
			<li>
				<Nav to="#work-experience" section="work-experience">WORK EXPERIENCE</Nav>
			</li>
		</ul>
	</nav>
);

export default Navigator;
