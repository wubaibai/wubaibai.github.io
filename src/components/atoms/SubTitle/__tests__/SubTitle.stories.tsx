import React from 'react';
import { storiesOf } from '@storybook/react';

import SubTitle from 'components/atoms/SubTitle';

const stories = storiesOf('atoms/SubTitle', module);

stories.add('__interactive', () => <SubTitle>Hello</SubTitle>, { jest: 'SubTitle' });
