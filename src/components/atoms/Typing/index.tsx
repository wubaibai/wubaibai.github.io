import React, { useEffect, useState } from 'react';

import style from './index.css';

interface TypingProperty {
	list: string[];
}

const Typing: React.FC<TypingProperty> = ({list}) => {
	const [text, setText] = useState('');
	const [index, setIndex] = useState(0);
	const [length, setLength] = useState(0);
	const [backspace, setBackspace] = useState(false);
	const wordCount = list.length;

	/**
	 * Forward effect
	 */
	useEffect(() => {
		const interval = setInterval(() => {
			/**
			 * Change next word
			 */
			if (text === '' && backspace === true) {
				console.log(':::NEXT WORD:::');
				setBackspace(false);
				setLength(0);

				const newIndex = index === wordCount - 1 ? 0 : index + 1;
				setIndex(newIndex);
				return;
			}

			/**
			 * Finished one word
			 */
			if (backspace === false && text === list[index]) {
				console.log(':::FINISHED ONE WORD set BACKSPACE:::');
				setBackspace(true);
				return;
			}

			/**
			 * TYPING
			 */
			if (backspace === false) {
				console.log(':::TYPING:::');
				setLength(length + 1);
				const newText = list[index].substr(0, length + 1);
				setText(newText);
			}
		}, 200);

		return () => {
			clearInterval(interval);
		};
	}, [text, index, backspace]);

	/**
	 * Backspace effect
	 */
	useEffect(() => {
		const interval = setInterval(() => {
			if (backspace === true && text !== '') {
				console.log(':::BACKSPACE:::');
				setLength(length - 1);
				const newText = list[index].substr(0, length - 1);
				setText(newText);
			}
		}, 80);

		return () => {
			clearInterval(interval);
		};
	}, [text, backspace]);

	return (<div>
		<span>{text}</span>
		<span className={style.cursor}></span>
	</div>);
};

export default Typing;
