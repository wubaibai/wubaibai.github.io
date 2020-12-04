import React from 'react';
import classNames from 'classnames';

import style from './index.css';

interface LinkButtonProperty {
	to?: string;
	children: React.ReactChildren | string;
	className?: string;
}

const LinkButton: React.FC<LinkButtonProperty> = ({ to, children, className }) => {
	return (
		// eslint-disable-next-line react/jsx-no-target-blank
		<a className={classNames(style.button, className)} href={to} role="button" target="_blank">
			{children}
		</a>
	);
};

export default LinkButton;
