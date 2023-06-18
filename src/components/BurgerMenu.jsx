import React from "react";

export default function BurgerMenu({ isClicked, clsActive, clsDisable }) {
  const divCls = isClicked ? clsActive : clsDisable;

  return (
    <div className={props.cls} onClick={props.onClick}>
      <div className={divCls}></div>
      <div className={divCls}></div>
      <div className={divCls}></div>
    </div>
  );
}
