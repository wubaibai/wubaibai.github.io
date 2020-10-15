import React from 'react';
import classNames from 'classnames';

import style from './index.css';

interface SectionProperty {
	bgColor?: string;
}

const Section: React.FC<SectionProperty> = ({ children, bgColor }) => (
	<section className={classNames(style.section, bgColor)}>
		<div>{children}</div>
	</section>
);

export default Section;
