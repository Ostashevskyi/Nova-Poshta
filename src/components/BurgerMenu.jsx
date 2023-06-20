import React from "react";

const BurgerMenu = ({ isClicked, clsActive, clsDisable, cls, onClick }) => {
  const divCls = isClicked ? clsActive : clsDisable;

  return (
    <div className={cls} onClick={onClick}>
      <div className={divCls}></div>
      <div className={divCls}></div>
      <div className={divCls}></div>
    </div>
  );
};

export default BurgerMenu;
