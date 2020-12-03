import React from 'react';

import Dot from 'components/atoms/Dot';

import style from './index.css';

interface DotsProperty {
	count: number;
}

const Dots: React.FC<DotsProperty> = ({ count }) => {
	const dots = [];
	for (let i = 0; i < count; i += 1) {
		dots.push(<Dot key={i} />);
	}

	return <div className={style.dots}>{dots}</div>;
};

export default Dots;
