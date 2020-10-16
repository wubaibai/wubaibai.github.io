import React from 'react';
import classNames from 'classnames';

import style from './index.css';

interface SectionProperty {
	className?: string;
}

const Section: React.FC<SectionProperty> = ({ children, className }) => (
	<section className={classNames(style.section, className)}>
		<div>{children}</div>
	</section>
);

export default Section;
