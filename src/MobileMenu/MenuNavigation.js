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
            setMenu("breakfast");
            setNav(false);
            history.push("/menu");
          }}
        >
          BREAKFAST
        </button>
      </div>
      <div>
        <button
          className={style.navMenuButton}
          onClick={() => {
            setMenu("lunch");
            setNav(false);
            history.push("/menu");
          }}
        >
          LUNCH
        </button>
      </div>
      <div>
        <button
          className={style.navMenuButton}
          onClick={() => {
            setMenu("dinner");
            setNav(false);
            history.push("/menu");
          }}
        >
          DINNER
        </button>
      </div>
      <div>
        <button
          className={style.navMenuButton}
          onClick={() => {
            setMenu("dessert");
            setNav(false);
            history.push("/menu");
          }}
        >
          DESSERT
        </button>
      </div>
      <div>
            <button 
            className={style.navMenuButton} 
            onClick={()=>{setMenu('drinks'); setNav(false); history.push("/menu") }}>DRINKS</button>
        </div>
    </div>
  );
};

export default MenuNavigation;
