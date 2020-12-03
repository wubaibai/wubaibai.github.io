import React from 'react';

import Logo from 'components/atoms/Logo';

import style from './index.css';

const Loading: React.FC = () => (<div className={style.loading}>
    <Logo animate={true} />
</div>);

export default Loading;
