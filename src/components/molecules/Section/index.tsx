import React from 'react';
import classNames from 'classnames';

import style from './index.css';

interface SectionProperty {
	className?: string;
	id?: string;
}

const Section: React.FC<SectionProperty> = ({ id, children, className }) => (
	<section id={id} className={classNames(className, style.section)}>
		<div>{children}</div>
	</section>
);

export default Section;
