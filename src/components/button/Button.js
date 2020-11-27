import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBox } from "./style";

/**
 * Primary UI component for user interaction
 */
const Button = ({ onClick, disabled, type, size, children,  ...props }) => {
  return (
    <ButtonBox
      onClick={!disabled && onClick}
      disabled={disabled}
      type={type}
      size={size}
      {...props}
    >
      {children}
    </ButtonBox>
  );
};

Button.propTypes = {
  /**
   * Button status
   */
  disabled: PropTypes.bool,
  /**
   * Click handler
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Type of button
   */
  type: PropTypes.oneOf(["contained", "outlined", "text"]),
  /**
   * Size button
   */
  size: PropTypes.oneOf(["large", "medium", "small"])
};

Button.defaultProps = {
  disabled: false,
  onClick: undefined,
  type: "contained",
  size: "medium"
};

export default Button;