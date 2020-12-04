import React from 'react';
import SideMenu from './SideMenu';

export default {
  title: 'Components/SideMenu',
  component: SideMenu,
};

const menuItems = [
  {id: "1", label: "Item 1"},
  {id: "2", label: "Item 2"},
  {id: "3", label: "Item 3"},
  {id: "4", label: "Item 4"},
  {id: "5", label: "Item 5"},
  {id: "6", label: "Item 6"}
]

const Template = (args) => <SideMenu {...args} />;

export const Base = Template.bind({});
Base.args = {
  menuItems: menuItems,
  selected: "2"
};
