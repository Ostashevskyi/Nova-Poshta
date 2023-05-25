import React from "react";

export default function BurgerMenu(props) {
  const abc = props.isClicked ? props.clsActive : props.clsDisable;

  return (
    <div className={props.cls} onClick={props.onClick}>
      <div className={abc}></div>
      <div className={abc}></div>
      <div className={abc}></div>
    </div>
  );
}
