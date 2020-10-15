import React from 'react';
import classNames from 'classnames';

import style from './index.css';

interface TitleProperty {
	color?: string;
}

const Title: React.FC<TitleProperty> = ({ children, color }) => (
	<div className={classNames(style.title, color)}>{children}</div>
);

export default Title;
