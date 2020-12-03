import React from 'react';
import classNames from 'classnames';

import style from './index.css';

interface LogoProperty {
	animate?: boolean;
}

const Logo: React.FC<LogoProperty> = ({ animate }) => (
	<div id="logo" className={classNames(style.logo, animate ? style.animate : undefined)}>
		<div className={style.up} />
		<div className={style.down} />
	</div>
);

export default Logo;
