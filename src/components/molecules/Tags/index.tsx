import React from 'react';

import Tag from 'components/atoms/Tag';

import style from './index.css';

interface TagsProperty {
	items: string[];
}

const Tags: React.FC<TagsProperty> = ({ items }) => (
	<div className={style.tags}>
		{items.map(item => (
			<Tag key={item}>{item}</Tag>
		))}
	</div>
);

export default Tags;
