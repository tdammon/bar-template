import React from "react";
import { useHistory } from "react-router-dom";
import style from "./MobileMenu.module.css";

const MenuNavigation = ({ setNav, setMenu }) => {
  const history = useHistory();

  return (
    <div className={style.navMenu}>
      {/* <div>
            <button className={style.navMenuButton} onClick={()=>{setMenu('starters');  setNav(false); history.push("/menu") }}>STARTERS</button>
        </div> */}
      <div>
        <button
          className={style.navMenuButton}
          onClick={() => {
            setMenu("beer");
            setNav(false);
            history.push("/menu");
          }}
        >
          TAPS
        </button>
      </div>
      <div>
        <button
          className={style.navMenuButton}
          onClick={() => {
            setMenu("drinks");
            setNav(false);
            history.push("/menu");
          }}
        >
          {`BOTTLES & CANS`}
        </button>
      </div>
      <div>
        <button
          className={style.navMenuButton}
          onClick={() => {
            setMenu("wine");
            setNav(false);
            history.push("/menu");
          }}
        >
          {`WINE & SELTZERS`}
        </button>
      </div>
      <div>
        <button
          className={style.navMenuButton}
          onClick={() => {
            setMenu("cocktails");
            setNav(false);
            history.push("/menu");
          }}
        >
          SPECIALS
        </button>
      </div>
      <div>
        <button
          className={style.navMenuButton}
          onClick={() => {
            setMenu("extras");
            setNav(false);
            history.push("/menu");
          }}
        >
          EXTRAS
        </button>
      </div>
      {/* <div>
        <button
          className={style.navMenuButton}
          onClick={() => {
            setMenu("snacks");
            setNav(false);
            history.push("/menu");
          }}
        >
          SNACKS
        </button>
      </div> */}
    </div>
  );
};

export default MenuNavigation;
