import React from 'react';
import { storiesOf } from '@storybook/react';

import Hero from 'components/atoms/Hero';

const stories = storiesOf('atoms/Hero', module);

stories.add('__interactive', () => <Hero />, { jest: 'Hero' });
