import React from 'react';

import Section from 'components/molecules/Section';
import ProjectCard from 'components/molecules/ProjectCard';
import Dots from 'components/molecules/Dots';
import Title from 'components/atoms/Title';
import SubTitle from 'components/atoms/SubTitle';

import style from './index.css';
import { surveycakeProjects, labProjects, websiteProjects } from './list';

const WorkExperience: React.FC = () => (
	<Section className={style.section}>
		<div className={style.workExperience}>
			<div className={style.header}>
				<Dots count={2} />
				<Title className={style.title}>Work Experience</Title>
				<Dots count={2} />
			</div>
			<div className={style.workBlock}>
				<SubTitle className={style.subTitle}>SurveyCake Product Development</SubTitle>
				<div className={style.projectCards}>
					{surveycakeProjects.map(project => (
						<div key={project.title}>
							<ProjectCard data={project} />
						</div>
					))}
				</div>
			</div>
			<div className={style.workBlock}>
				<SubTitle className={style.subTitle}>Internal System</SubTitle>
				<div className={style.projectCards}>
					{labProjects.map(project => (
						<div key={project.title}>
							<ProjectCard data={project} />
						</div>
					))}
					<div />
				</div>
			</div>
			<div className={style.workBlock}>
				<SubTitle className={style.subTitle}>Official Website Project</SubTitle>
				<div className={style.projectCards}>
					{websiteProjects.map(project => (
						<div key={project.title}>
							<ProjectCard data={project} />
						</div>
					))}
					<div />
				</div>
			</div>
		</div>
	</Section>
);

export default WorkExperience;
