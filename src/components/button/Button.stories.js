import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} >Button</Button>;

export const Contained = Template.bind({});
Contained.args = {
  type: "contained"
};

export const Outlined = Template.bind({});
Outlined.args = {
  type: "outlined"
};

export const Text = Template.bind({});
Text.args = {
  type: "text"
};