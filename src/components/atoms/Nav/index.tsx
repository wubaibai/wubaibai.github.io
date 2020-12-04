import React, { MouseEvent } from 'react';

import { useHistory } from 'models/routing';
import { History } from 'history';

import style from './index.css';

const onClickHandler = (callback: (e: MouseEvent<HTMLAnchorElement>) => void, history: History, section?: string) => {
	return (e: MouseEvent<HTMLAnchorElement>): void => {
		e.preventDefault();
		history.push({
			pathname: e.currentTarget.pathname,
			hash: section,
		});
		callback(e);

		if (!section) {
			return;
		}

		const top = document.getElementById(section)?.offsetTop;
		if (top) {
			document.documentElement.scrollTo({
				top,
				left: 0,
				behavior: 'smooth',
			});
		}
	};
};

interface NavProperty {
	to?: string;
	section?: string;
	onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
	children: React.ReactChildren | string;
}

const Nav: React.FC<NavProperty> = ({ to, section, onClick = () => {}, children }) => {
	const history = useHistory();

	return (
		<a
			className={style.nav}
			href={to}
			role="button"
			tabIndex={0}
			onClick={onClickHandler(onClick, history, section)}
			onKeyPress={() => {}}
		>
			{children}
		</a>
	);
};

export default Nav;
