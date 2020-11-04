import coverAwesomeShare from 'images/cover/awesome-share.png';
import coverBeiBeiJapan from 'images/cover/beibei-japan.png';
import coverKeepIn from 'images/cover/keep-in.png';
import coverKKQuiz from 'images/cover/kk-quiz.png';

const projects = [
	{
		cover: coverAwesomeShare,
		title: 'Awesome Share / 連接分享設定工具',
		description:
			'透過 Firebase 打造網址分享小工具，製作一個網頁可以自己上傳圖片、連結、Meta 內容，儲存於 Firebase 產生分享連結，可以在同一頁面撰寫 PO 文，一鍵分享至 Facebook。',
		tags: ['pug', 'firebase', '25sprout 1st hackathon'],
		link: 'https://25sprout.github.io/awesome-share/',
	},
	{
		cover: coverBeiBeiJapan,
		title: 'BeiBei Japan / Youtube 日語筆記',
		description:
			'有一陣子很喜歡看 Youtube 影片學習日語，所以做了一個影片的筆記工具，可以確切紀錄句子的時間點，也嘗試用前端排版日文標音。',
		tags: ['react', 'android', 'firebase', 'youtube'],
		link: 'https://wubaibai.github.io/beibeijapan/',
	},
	{
		cover: coverKeepIn,
		title: 'Keep In / Android 密碼管理工具',
		description: '對於每次產生密碼、記憶密碼的流程工具感到不方便，於是與先生一起製作一個密碼 APP。',
		tags: ['design', 'pm'],
		link: undefined,
	},
	{
		cover: coverKKQuiz,
		title: 'KK Quiz / KKBOX open api 創作',
		description:
			'參加 KKBOX 的 open api 創作活動，輸入一個歌手的名字，會隨間播放該歌手的歌數秒鐘，玩猜歌名的遊戲。',
		tags: ['design', 'pm'],
		link: undefined,
	},
];

export default projects;
