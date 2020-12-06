import React from 'react';
import { storiesOf } from '@storybook/react';

import Typing from 'components/atoms/Typing';

const stories = storiesOf('atoms/Typing', module);

stories.add('__interactive', () => (<Typing list={[
    'Front-end Developer',
    'Project Manager',
    'Scrum Master',
]} />), { jest: 'Typing' });
