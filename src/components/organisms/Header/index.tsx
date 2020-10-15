import React from 'react';

import Logo from 'components/atoms/Logo';
import Navigation from 'components/molecules/Navigation';

import styles from './index.css';

const Header: React.FC = () => (
	<header className={styles.header}>
		<Logo />
		<Navigation />
	</header>
);

export default Header;
