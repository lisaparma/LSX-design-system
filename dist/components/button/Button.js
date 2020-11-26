function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBox } from "./style";
/**
 * Primary UI component for user interaction
 */

const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(ButtonBox, _extends({
    type: "button",
    style: backgroundColor && {
      backgroundColor
    }
  }, props), label);
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};
export default Button;