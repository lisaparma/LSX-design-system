import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {FirstGrade, Menu, MenuScroll} from "./style";
import { map } from 'lodash';


/**
 * Side menu
 */
const SideMenu = ({ title, menuItems, selected }) => {
  const list = useMemo(() => {
    return map(menuItems, (item) => (
      <FirstGrade selected={item.id === selected} onClick={item.onClick}>
        {item.label}
      </FirstGrade>
    ));
  }, [menuItems])

  return (
    <Menu>
      {title}
      <MenuScroll>
        {list}
      </MenuScroll>
    </Menu>
  )
};

SideMenu.propTypes = {
  /**
   * SideMenu title component
   */
  title: PropTypes.elementType,
  /**
   * List of element in menu
   */
  menuItems: PropTypes.elementType,
  /**
   * Id of selected item list
   */
  selected: PropTypes.string,
};

SideMenu.defaultProps = {};

export default SideMenu;