import React from 'react';
import PropTypes from 'prop-types';
import { TextBox } from "./style";

/**
 * Component to manage strings
 */
const Text = ({ size, bold, children }) => {
  return (
    <TextBox
      size={size}
      bold={bold}
    >
      {children}
    </TextBox>
  );
};

Text.propTypes = {
  /**
   * Size of text
   */
  size: PropTypes.oneOf(["large", "medium", "small"]),
  /**
   * Weight of text
   */
  bold: PropTypes.bool
};

Text.defaultProps = {
  size: "medium",
  bold: false
};

export default Text;