import React from "react";
import style from "./MobileMenu.module.css";
import { useHistory } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import companyLogo from "../CompanyImages/FrenchPress.png";

const ExtrasMenu = () => {
  const history = useHistory();

  return (
    <div className={style.menu}>
      {/* Rework this section to map in items */}
      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          {/* <div className={style.menuItemTitle}>EXTRAS</div> */}
          {/* <div className={style.menuItemPrice}>$3.50</div> */}
        </div>
        <div className={style.menuItemNotes}>
          Coca Cola Products <br></br>
          Red Bull <br></br>
          Red Bull Sugar Free <br></br>
        </div>
      </div>
    </div>
  );
};

export default ExtrasMenu;
