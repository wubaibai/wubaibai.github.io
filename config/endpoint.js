export const API_PORT = 9000;
export const HOST_PORT = 3000;

export const HOST_MAP = {
	dev: `http://localhost:${API_PORT}`,
	demo: 'https://wubaibai.github.io',
	production: 'https://wubaibai.github.io',
};

const SELF_HOST_MAP = {
	dev: `http://localhost:${HOST_PORT}`,
	demo: '',
	production: '',
};

export const API_ENDPOINT = HOST_MAP[process.env.API];
export const SELF_HOST_ENDPOINT = SELF_HOST_MAP[process.env.API];

export default {
	// Set API endpoint
	API_ENDPOINT: `"${API_ENDPOINT}"`,
	SELF_HOST_ENDPOINT: `"${SELF_HOST_ENDPOINT}"`,
};
