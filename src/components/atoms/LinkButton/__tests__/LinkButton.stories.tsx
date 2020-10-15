import React from 'react';
import { storiesOf } from '@storybook/react';

import LinkButton from 'components/atoms/LinkButton';

const stories = storiesOf('atoms/LinkButton', module);

stories.add('__interactive', () => <LinkButton>查看履歷</LinkButton>, { jest: 'LinkButton' });
