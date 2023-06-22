import React from "react";
import {StyleButton} from "./style";

function ButtonSign(props) {
  return(
    <StyleButton type={props.type} onClick={props.onClick}>{props.children}</StyleButton>
  );
}

export default ButtonSign;
