import React from 'react';
import PropTypes from 'prop-types';
import { ContentModal, FooterModal, HeaderModal, ModalContainer } from "./style";
import Portal from "../portal/Portal";
import Text from "../text/Text";

/**
 * Absolute overlay to center every component you want.
 */
const Modal = ({ title, footer, children }) => {
  return (
    <Portal>
      <ModalContainer>
        {!!title && <HeaderModal>{title}</HeaderModal>}
        <ContentModal title={!!title}>
          {children}
          {footer && <FooterModal>{footer}</FooterModal>}
        </ContentModal>
      </ModalContainer>
    </Portal>
  )
};

Modal.propTypes = {
  /**
   * Modal title component
   */
  title: PropTypes.elementType,
  /**
   * Modal footer component
   */
  footer: PropTypes.elementType
};

Modal.defaultProps = {};

export default Modal;