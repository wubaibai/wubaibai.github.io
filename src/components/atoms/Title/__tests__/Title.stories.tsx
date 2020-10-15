import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from 'components/atoms/Title';

const stories = storiesOf('atoms/Title', module);

stories.add('__interactive', () => <Title>About</Title>, { jest: 'Title' });
