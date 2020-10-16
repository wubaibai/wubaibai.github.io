import React from 'react';

import style from './index.css';

const Tag: React.FC = ({ children }) => (
	<div className={style.tag}>
		<div className={style.text}>{children}</div>
		<div className={style.base} />
	</div>
);

export default Tag;
