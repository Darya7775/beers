import React from "react";
import {StyleModal, StyleFrame} from "./style";

function Modal(props) {
  return(
    <StyleModal>
      <StyleFrame>
        {props.children}
      </StyleFrame>
    </StyleModal>
  );
}

export default Modal;
