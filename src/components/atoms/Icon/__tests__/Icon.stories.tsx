import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from 'components/atoms/Icon';

const stories = storiesOf('atoms/Icon', module);

stories.add('__interactive', () => <Icon>A</Icon>, { jest: 'Icon' });
