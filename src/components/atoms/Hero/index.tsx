import React from 'react';

import Typing from 'components/atoms/Typing';
import style from './index.css';

const Hello: React.FC = () => (
	<div id="hero" className={style.hero}>
		<div id="hi" className={style.hi}>
			嗨！我是凱西，
		</div>
		<div className={style.job}>
			<div>A</div>
			<Typing list={[
				'Front-end Developer',
				'Project Manager',
				'Scrum Master',
			]} />
		</div>
	</div>
);

export default Hello;
