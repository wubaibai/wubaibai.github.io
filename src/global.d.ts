declare module '*.css' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.inline.svg' {
	import React = require('react');
	export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}
