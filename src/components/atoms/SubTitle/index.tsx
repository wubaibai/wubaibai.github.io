import React from 'react';
import classNames from 'classnames';

import style from './index.css';

interface SubTitleProperty {
	className?: string;
}

const SubTitle: React.FC<SubTitleProperty> = ({ children, className }) => (
	<div className={classNames(style.subtitle, className)}>{children}</div>
);

export default SubTitle;
