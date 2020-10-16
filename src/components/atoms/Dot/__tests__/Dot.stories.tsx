import React from 'react';
import { storiesOf } from '@storybook/react';

import Dot from 'components/atoms/Dot';

const stories = storiesOf('atoms/Dot', module);

stories.add('__interactive', () => <Dot />, { jest: 'Dot' });
