import React from 'react';
import classNames from 'classnames';

import style from './index.css';

interface LogoProperty {
	animate?: boolean;
	className?: string;
}

const Logo: React.FC<LogoProperty> = ({ animate, className }) => (
	<div className={classNames(style.logo, animate ? style.animate : undefined, className)}>
		<div className={style.up} />
		<div className={style.down} />
	</div>
);

export default Logo;
