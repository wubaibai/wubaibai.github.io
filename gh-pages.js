const ghpages = require('gh-pages');

ghpages.publish('_public', {
	branch: 'public',
	repo: 'git@github.com:wubaibai/wubaibai.github.io.git',
	user: {
		name: 'Cathy Wu',
		email: 'a304126@gmail.com',
	},
}, (err) => {
	console.log(err);
});
