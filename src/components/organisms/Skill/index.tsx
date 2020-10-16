import React from 'react';

import Section from 'components/molecules/Section';
import Title from 'components/atoms/Title';
import SubTitle from 'components/atoms/SubTitle';
import Tags from 'components/molecules/Tags';

import style from './index.css';

const familiar = [
	'Javascript',
	'Node.js',
	'HTML5',
	'CSS3',
	'Gulp',
	'Git & Git flow',
	'Gitlab CI/CD',
	'Slack bot',
	'webhook',
	'Xmind',
	'diagrams.net',
	'GA',
	'Amplitude',
	'GTM',
	'AWS S3, SES',
	'GCP firebase',
];
const experience = [
	'Nightwatch.js',
	'TDD with jest',
	'MySQL',
	'Redash',
	'Metabase',
	'Grafana (Service Status Tracking)',
	'Cloudflare (CDN)',
];

const Skill: React.FC = () => (
	<Section bgColor={style.section}>
		<div className={style.skill}>
			<div className={style.tech}>
				<div className={style.techBlock}>
					<SubTitle>Familiar With</SubTitle>
					<Tags items={familiar} />
				</div>
				<div className={style.techBlock}>
					<SubTitle>experience</SubTitle>
					<Tags items={experience} />
				</div>
			</div>
			<div className={style.gap} />
			<div className={style.intro}>
				<Title color={style.title}>SKILL</Title>
				<ul>
					<li>Web development</li>
					<li>Cross-functional Team Leadership</li>
					<li>Product Git flow management</li>
					<li>Product development SPEC planning</li>
					<li>Workflow optimization</li>
					<li>Product cost control and program performance optimization</li>
					<li>Emergency handling</li>
				</ul>
			</div>
		</div>
	</Section>
);

export default Skill;
