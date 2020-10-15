import React from 'react';

import style from './index.css';

interface LinkButtonProperty {
	to?: string;
	children: React.ReactChildren | string;
}

const LinkButton: React.FC<LinkButtonProperty> = ({ to, children }) => {
	return (
		// eslint-disable-next-line react/jsx-no-target-blank
		<a className={style.button} href={to} role="button" target="_blank">
			{children}
		</a>
	);
};

export default LinkButton;
