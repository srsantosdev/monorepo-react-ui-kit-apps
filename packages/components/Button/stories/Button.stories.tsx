import React from 'react';

import { Button } from '../src';

export const Simple: React.VFC = args => <Button {...args}>Hello World</Button>;

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    color: {
      defaultValue: 'primary',
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
  },
};
