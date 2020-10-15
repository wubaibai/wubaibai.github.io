import React from 'react';

import style from './index.css';

const Logo: React.FC = () => (
	<div id="logo" className={style.logo}>
		<div className={style.up} />
		<div className={style.down} />
	</div>
);

export default Logo;
