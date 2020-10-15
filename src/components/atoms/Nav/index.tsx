import React, { MouseEvent } from 'react';

import { useHistory } from 'models/routing';
import { History } from 'history';

import style from './index.css';

const onClickHandler = (callback: (e: MouseEvent<HTMLAnchorElement>) => void, history: History) => {
	return (e: MouseEvent<HTMLAnchorElement>): void => {
		e.preventDefault();
		history.push(e.currentTarget.pathname);
		callback(e);
	};
};

interface LinkProperty {
	to?: string;
	onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
	children: React.ReactChildren | string;
}

const Link: React.FC<LinkProperty> = ({ to, onClick = () => {}, children }) => {
	const history = useHistory();

	return (
		<a
			className={style.nav}
			href={to}
			role="button"
			tabIndex={0}
			onClick={onClickHandler(onClick, history)}
			onKeyPress={() => {}}
		>
			{children}
		</a>
	);
};

export default Link;
