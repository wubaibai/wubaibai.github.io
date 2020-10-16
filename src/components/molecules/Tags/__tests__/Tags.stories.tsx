import React from 'react';
import { storiesOf } from '@storybook/react';

import Tags from 'components/molecules/Tags';

const stories = storiesOf('molecules/Tags', module);
const items = ['Node.js', 'HTML5', 'CSS3'];

stories.add('__interactive', () => <Tags items={items} />, { jest: 'Tags' });
