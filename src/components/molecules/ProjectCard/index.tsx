/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import classNames from 'classnames';

import Tags from 'components/molecules/Tags';
import Dots from 'components/molecules/Dots';

import style from './index.css';

interface ProjectProperty {
	title: string;
	description?: string;
	cover: string;
	tags: string[];
	link?: string;
}

interface ProjectCardProperty {
	data?: ProjectProperty;
	className?: string;
}

const ProjectCard: React.FC<ProjectCardProperty> = ({ data, className }) => {
	if (!data) {
		return (
			<div className={classNames(style.card, className)}>
				<div className={style.placeholder}>
					<Dots count={3} />
				</div>
			</div>
		);
	}

	return (
		<div className={classNames(style.card, className)}>
			<div className={style.cover}>
				{data.link && (
					<div className={style.overlay}>
						<a className={style['overlay-link']} href={data.link} target="_blank">
							<div className={style['overlay-button']}>
								<div className={style['overlay-button-text']}>去瞧瞧</div>
								<div className={style['overlay-button-base']}> </div>
							</div>
						</a>
					</div>
				)}
				<img src={data.cover} alt={data.title} />
			</div>
			<div className={style.title}>{data.title}</div>
			<div className={style.description}>{data.description}</div>
			<div className={style.tags}>
				<Tags items={data.tags} />
			</div>
		</div>
	);
};

export default ProjectCard;
