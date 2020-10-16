import React from 'react';

import Section from 'components/molecules/Section';
import ProjectCard from 'components/molecules/ProjectCard';
import Dots from 'components/molecules/Dots';
import Title from 'components/atoms/Title';

import style from './index.css';
import list from './list';

const SideProject: React.FC = () => (
	<Section className={style.section}>
		<div className={style.sideProject}>
			<div>
				<Title className={style.title}>SIDE-PROJECT</Title>
				<div className={style.dots}>
					<Dots count={3} />
				</div>
			</div>
			{list.map(project => (
				<div>
					<ProjectCard data={project} />
				</div>
			))}
			<div>
				<ProjectCard />
			</div>
		</div>
	</Section>
);

export default SideProject;
