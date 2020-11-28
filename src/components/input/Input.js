import React from 'react';
import { Fragment } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import {InputBox, Overlay} from "./style";

/**
 * Absolute overlay to center every component you want.
 */
const Input = ({ opacity, ...props }) => {
  return (
    <InputBox
      {...props}
    />
  )
};

Input.propTypes = {
  /**
   * Overlay opacity
   */

};

Input.defaultProps = {

};

export default Input;