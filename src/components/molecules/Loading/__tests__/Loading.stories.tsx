import React from 'react';
import { storiesOf } from '@storybook/react';

import Loading from 'components/molecules/Loading';

const stories = storiesOf('molecules/Loading', module);

stories.add('__interactive', () => <Loading />, { jest: 'Loading' });
