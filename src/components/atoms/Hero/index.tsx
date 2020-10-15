import React from 'react';

import style from './index.css';

const Hello: React.FC = () => (
	<div id="hero" className={style.hero}>
		<div id="hi" className={style.hi}>
			嗨！我是凱西，
		</div>
		<div className={style.position}>A Front-end Developer</div>
	</div>
);

export default Hello;
