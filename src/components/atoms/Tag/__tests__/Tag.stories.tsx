import React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from 'components/atoms/Tag';

const stories = storiesOf('atoms/Tag', module);

stories.add('__interactive', () => <Tag>Node.js</Tag>, { jest: 'Tag' });
