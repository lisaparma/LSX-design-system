import React from 'react';
import Modal from './Modal';
import Button from "../button/Button";

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} >Contenuto della modale. Ci possono essere tantissime scritte o componenti.</Modal>;
export const TitleFooter = Template.bind({});
TitleFooter.args = {
  title: "Sono una modale!",
  footer: <Button>Click me</Button>
};

export const Title = Template.bind({});
Title.args = {
  title: "Title"
};


export const Nude = Template.bind({});
