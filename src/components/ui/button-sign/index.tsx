import React from "react";
import {StyleButton} from "./style";

interface Props {
  type: "button" | "submit" | "reset" | undefined,
  children: JSX.Element,
  onClick: () => void
};

const ButtonSign: React.FC<Props> = (props: Props) => {
  return(
    <StyleButton type={props.type} onClick={props.onClick}>{props.children}</StyleButton>
  );
}

export default ButtonSign;
