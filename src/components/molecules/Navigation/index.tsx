import React from 'react';
import Nav from 'components/atoms/Nav';

import style from './index.css';

const Navigator: React.FC = () => (
	<nav className={style.navigation}>
		<ul>
			<li>
				<Nav>ABOUT</Nav>
			</li>
			<li>
				<Nav>SKILL</Nav>
			</li>
			<li>
				<Nav>SIDE-PROJECT</Nav>
			</li>
			<li>
				<Nav>WORK EXPERIENCE</Nav>
			</li>
		</ul>
	</nav>
);

export default Navigator;
