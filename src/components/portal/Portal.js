import React from 'react';
import { Fragment } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { Overlay } from "./style";

/**
 * Absolute overlay to center every component you want.
 */
const Portal = ({ opacity, children }) => {
  const mount = document.getElementById("root");
  return createPortal(<Fragment><Overlay opacity={opacity}>{children}</Overlay></Fragment>, mount)
};

Portal.propTypes = {
  /**
   * Overlay opacity
   */
  opacity: PropTypes.number,
};

Portal.defaultProps = {
  opacity: 0.9
};

export default Portal;