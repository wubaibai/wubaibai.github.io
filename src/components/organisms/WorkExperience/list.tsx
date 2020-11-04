import coverSurveycakeAdmin from 'images/cover/surveycake-admin.png';
import coverSurveycakeLogicEngine from 'images/cover/surveycake-logic-engine.png';
import coverSurveycakeWebsite from 'images/cover/surveycake-website.png';
import coverLabAvatar from 'images/cover/lab-avatar.png';
import coverLabSlt from 'images/cover/lab-slt.png';
import coverLabUiProposal from 'images/cover/lab-ui-proposal.png';
import coverLabVacation from 'images/cover/lab-vacation.png';
import coverLabWishpool from 'images/cover/lab-wishpool.png';
import coverWebsiteCwgv from 'images/cover/website-cwgv.png';
import coverWebsiteLetzcreate from 'images/cover/website-letzcreate.png';

export const surveycakeProjects = [
	{
		cover: coverSurveycakeLogicEngine,
		title: '填答頁面 & Logic Engine',
		description:
			'將原先問卷填答頁面的答題邏輯抽獨立出來，建置 login-engine npm 套件供其他專案引入。',
		tags: ['confidential', 'redux', 'front-end', 'TDD'],
		link: undefined,
	},
	{
		cover: coverSurveycakeAdmin,
		title: 'SurveyCake 問卷管理後台',
		description: '從 0 開始打造第一版的 SureyCake 問卷後台，包含訂閱金流、資料分析、圖表呈現。',
		tags: ['pug', 'front-end', 'design'],
		link: 'https://www.behance.net/gallery/107232459/SurveyCake-Admin-Design-Web-Development',
	},
	{
		cover: coverSurveycakeWebsite,
		title: 'SurveyCake 官方網站',
		description: '設計與開發現有 SurveyCake 官方網站，串接導購流程，供使用者訂閱服務。',
		tags: ['pug', 'front-end', 'design'],
		link: 'https://www.surveycake.com/',
	},
];

export const labProjects = [
	{
		cover: coverLabAvatar,
		title: 'Avatar System',
		description:
			'建立一個公司內部使用的人資系統，建立新人 on-board 的申請流程。並提供 API 供公司各大系統串接人員清單。',
		tags: ['Google Login', 'full-stack', 'design'],
		link: undefined,
	},
	{
		cover: coverLabVacation,
		title: 'Vacation System',
		description:
			'建立一個公司內部使用的請假系統，自動計算對應年資年假，並串接 Google Calendar 自動加上請假事件，也方便公司年末結算剩餘假期。',
		tags: ['Google Login', 'full-stack', 'design'],
		link: undefined,
	},
	{
		cover: coverLabWishpool,
		title: 'Wishpool System',
		description: '建立一個公司內部使用的尾牙禮物許願系統，連續三年不斷優化改版。',
		tags: ['Google Login', 'full-stack', 'design'],
		link: undefined,
	},
	{
		cover: coverLabSlt,
		title: 'SLT System',
		description:
			'將網站需要翻譯的文字匯入網站後，可直接在界面上編輯各個語言翻譯，也可以匯出檔案供翻譯社使用。',
		tags: ['Google Login', 'full-stack', 'design'],
		link: undefined,
	},
	{
		cover: coverLabUiProposal,
		title: 'UI Proposal Online',
		description: '在還沒有 Zeplin 的年代，建立一個內部使用的提案 UI 統整網站。',
		tags: ['full-stack', 'design'],
		link: undefined,
	},
];

export const websiteProjects = [
	{
		cover: coverWebsiteCwgv,
		title: '天下文化官網',
		description: '',
		tags: ['front-end', 'design'],
		link: 'https://bookzone.cwgv.com.tw/',
	},
	{
		cover: coverWebsiteLetzcreate,
		title: '愛藝享官網',
		description: '',
		tags: ['shpping car', 'front-end', 'design'],
		link: undefined,
	},
];

export default '';
