import React from 'react';
import classNames from 'classnames';

import style from './index.css';

interface SubTitleProperty {
	color?: string;
}

const SubTitle: React.FC<SubTitleProperty> = ({ children, color }) => (
	<div className={classNames(style.subtitle, color)}>{children}</div>
);

export default SubTitle;
