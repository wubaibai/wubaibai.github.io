import React from 'react';
import { storiesOf } from '@storybook/react';

import ProjectCard from 'components/molecules/ProjectCard';
import coverAwesomeShare from 'images/cover/awesome-share.png';

const stories = storiesOf('molecules/ProjectCard', module);

const project = {
	cover: coverAwesomeShare,
	title: 'Awesome Share / 連接分享設定工具',
	description:
		'透過 Firebase 打造網址分享小工具，製作一個網頁可以自己上傳圖片、連結、Meta 內容，儲存於 Firebase 產生分享連結，可以在同一頁面撰寫 PO 文，一鍵分享至 Facebook。',
	tags: ['pug', 'firebase'],
};

stories.add('__interactive', () => <ProjectCard data={project} />, { jest: 'ProjectCard' });
