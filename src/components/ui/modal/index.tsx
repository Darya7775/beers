import React from "react";
import {StyleModal, StyleFrame} from "./style";

interface Props {
  children: JSX.Element
};

const Modal: React.FC<Props> = (props: Props) => {
  return(
    <StyleModal>
      <StyleFrame>
        {props.children}
      </StyleFrame>
    </StyleModal>
  );
}

export default Modal;
