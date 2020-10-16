import React from 'react';
import { storiesOf } from '@storybook/react';

import Dots from 'components/molecules/Dots';

const stories = storiesOf('molecules/Dots', module);

stories.add('__interactive', () => <Dots count={3} />, { jest: 'Dots' });
