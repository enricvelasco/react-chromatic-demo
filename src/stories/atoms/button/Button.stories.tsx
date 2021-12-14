import React from 'react';
import 'antd/dist/antd.css'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../../../ui/atoms/button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Solid.args = {
  label: 'Solid',
  type: 'primary'
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline',
  type: 'default'
};

export const Dashed = Template.bind({});
Dashed.args = {
  label: 'dashed',
  type: 'dashed'
};

export const Flat = Template.bind({});
Flat.args = {
  label: 'Flat',
  type: 'text'
};

export const Link = Template.bind({});
Link.args = {
  label: 'Link',
  type: 'link'
};
