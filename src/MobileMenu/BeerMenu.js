import React from "react";
import style from "./MobileMenu.module.css";
import { useHistory } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import companyLogo from "../CompanyImages/FrenchPress.png";

const BreakfastMenu = () => {
  const history = useHistory();

  return (
    <div className={style.menu}>
      {/* Rework this section to map in items */}
      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>DOMESTIC CANS</div>
          <div className={style.menuItemPrice}>$3.50</div>
        </div>
        <div className={style.menuItemNotes}>
          Coors Light <br></br>
          Miller Lite <br></br>
          Summer Shandy <br></br>
          Fat Tire<br></br>
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>IMPORTS</div>
          <div className={style.menuItemPrice}>$5.00</div>
        </div>
        <div className={style.menuItemNotes}>
          Guinness<br></br>
          Dos Equis<br></br>
          New Castle<br></br>
          Corona<br></br>
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>SELTZER</div>
          <div className={style.menuItemPrice}>$4.00</div>
        </div>
        <div className={style.menuItemNotes}>
          White Claw Mango<br></br>
          White Claw Black Cherry<br></br>
          Bud Light Strawberry<br></br>
          Vizzy Pineapple<br></br>
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>CIDER</div>
          <div className={style.menuItemPrice}>$5.00</div>
        </div>
        <div className={style.menuItemNotes}>
          Angry Orchard<br></br>
          Redds<br></br>
          Strongbow Gold Cider<br></br>
          Rekorderlig Pear Cider<br></br>
        </div>
      </div>
    </div>
  );
};

export default BreakfastMenu;
