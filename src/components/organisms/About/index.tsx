/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import Title from 'components/atoms/Title';
import Icon from 'components/atoms/Icon';
import LinkButton from 'components/atoms/LinkButton';
import Section from 'components/molecules/Section';
import GithubIcon from 'images/icon/github.inline.svg';
import YoutubeIcon from 'images/icon/youtube.inline.svg';
import MediumIcon from 'images/icon/medium.inline.svg';

import style from './index.css';

const About: React.FC = () => (
	<Section>
		<div className={style.about}>
			<div className={style.aside}>
				<Title className={style.title}>ABOUT ME</Title>
				<div className={style.information}>
					<div className={style.contact}>
						Nantou, Taiwan.
						<br />
						a304126@gmail.com
					</div>
					<div className={style['icon-links']}>
						<Icon>
							<a href="https://github.com/wubaibai" target="_blank">
								<GithubIcon />
							</a>
						</Icon>
						<Icon>
							<a href="https://www.youtube.com/user/a304126" target="_blank">
								<YoutubeIcon />
							</a>
						</Icon>
						<Icon>
							<a
								href="https://medium.com/%E5%8B%87%E6%95%A2%E7%88%B8%E5%AA%BD%E9%A4%8A%E6%88%90%E8%A8%98"
								target="_blank"
							>
								<MediumIcon />
							</a>
						</Icon>
					</div>
				</div>
			</div>
			<div className={style.intro}>
				<p>
					善於統整資訊、跨團隊溝通，有 APP Designer 及 Web Designer
					的經驗，對前端頁面的細節更加細心，在擔任前端工程師時找到自己的工作熱忱，工作之餘也喜歡寫程式解決自己生活上的問題。
				</p>
				<p>稱不上天才型的開發者，但是一個樂於嘗試的開發者，更多的工作經歷請見履歷。</p>
				<LinkButton to="https://www.cakeresume.com/s--BrYFaP4gz0SmVZCToQlrrw--/peichen-wu-resume-portfolio">
					查看履歷
				</LinkButton>
			</div>
		</div>
	</Section>
);

export default About;
