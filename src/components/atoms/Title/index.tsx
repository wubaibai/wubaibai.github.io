import React from 'react';
import classNames from 'classnames';

import style from './index.css';

interface TitleProperty {
	className?: string;
}

const Title: React.FC<TitleProperty> = ({ children, className }) => (
	<div className={classNames(style.title, className)}>{children}</div>
);

export default Title;
