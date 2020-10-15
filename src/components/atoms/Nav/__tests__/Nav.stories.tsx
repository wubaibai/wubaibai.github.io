import React from 'react';
import { storiesOf } from '@storybook/react';

import Nav from 'components/atoms/Nav';

const stories = storiesOf('atoms/Nav', module);

stories.add('__interactive', () => <Nav>ABOUT</Nav>, { jest: 'Nav' });
