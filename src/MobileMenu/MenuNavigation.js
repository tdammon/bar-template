import React from "react";
import { useHistory } from "react-router-dom";
import style from "./MobileMenu.module.css";

const MenuNavigation = ({ setNav, setMenu }) => {
  const history = useHistory();

  return (
    <div
      className={style.navMenu}
    >
      <div>
        <button
          className={style.navMenuButton}
          onClick={() => {
            setMenu("beer");
            setNav(false);
            history.push("/menu");
          }}
        >
          Taps
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
          {`Bottles & Cans`}
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
          {`Wine & Seltzers`}
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
          Specials
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
          Extras
        </button>
      </div>
    </div>
  );
};

export default MenuNavigation;
