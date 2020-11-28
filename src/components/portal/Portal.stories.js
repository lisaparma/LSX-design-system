import React from 'react';
import Portal from './Portal';
import Button from "../button/Button";

export default {
  title: 'Components/Portal',
  component: Portal,
};

const Template = (args) => <Portal {...args} ><Button>Botton</Button></Portal>;

export const Dark = Template.bind({});

export const Light = Template.bind({});
Light.args = {
  opacity: 0.2
};