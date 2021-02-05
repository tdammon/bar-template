import React from "react";
import style from "./MobileMenu.module.css";
import { useHistory } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import companyLogo from "../CompanyImages/FrenchPress.png";

const TapsMenu = () => {
  const history = useHistory();

  return (
    <div className={style.menu}>
      {/* Rework this section to map in items */}
      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>Taps</div>
          {/* <div className={style.menuItemPrice}>$3.50</div> */}
        </div>
        <div className={style.menuItemNotes}>
          Stella Cidre <br></br>
          Castle Danger Castle Cream Ale <br></br>
          Mich Golden Draft <br></br>
          Kona Big Wave<br></br>
          Golden Road Mango Cart <br></br>
          Coors Light <br></br>
          Island City Vanilla Dunkel <br></br>
          Toppling Goliath Pseudo Sue<br></br>
          Blue Moon <br></br>
          Elysian Space Dust <br></br>
          Surly Pocket Surgery <br></br>
          Goose Island Xmas Porter <br></br>
        </div>
      </div>
    </div>
  );
};

export default TapsMenu;
