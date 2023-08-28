/* eslint-disable react/prop-types */
import React from "react";

function Modal(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      {props.children}
    </Modal>
  );
}

export default Modal;
