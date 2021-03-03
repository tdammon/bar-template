import React, { Component } from "react";
import style from "./Contact.module.css";
import MenuNavigation from "../MobileMenu/MenuNavigation";

const Directions = ({ nav, setMenu, setNav, setFilter, menuList }) => {
  React.useEffect(() => {
    console.log("hit", menuList);
  }, []);
  return (
    <div className={style.app}>
      {nav ? (
        <MenuNavigation
          setMenu={setMenu}
          setNav={setNav}
          menuList={menuList}
          nav={nav}
          setFilter={setFilter}
        />
      ) : (
        <div>
          <div className={style.section}>
            <iframe
              className={style.iframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.415031283403!2d-91.64064868486703!3d44.054137834430236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f96d02935a6943%3A0xdcf380780e2a21cd!2sPort%20507!5e0!3m2!1sen!2sus!4v1611764719986!5m2!1sen!2sus"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Directions;
