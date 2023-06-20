import React from "react";

export default function BurgerMenu({
  isClicked,
  clsActive,
  clsDisable,
  cls,
  onClick,
}) {
  const divCls = isClicked ? clsActive : clsDisable;

  return (
    <div className={cls} onClick={onClick}>
      <div className={divCls}></div>
      <div className={divCls}></div>
      <div className={divCls}></div>
    </div>
  );
}
