import React from "react";
import style from "./MobileMenu.module.css";
import CallIcon from "@material-ui/icons/Call";
import companyLogo from "../CompanyImages/FrenchPress.png";
import homePicture from "../CompanyImages/cheese-and-bread.jpg";

const DessertMenu = () => {
  return (
    <div className={style.menu}>
      {/* Rework this section to map in items */}
      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          {/* <div className={style.menuItemTitle}>{`WINE & SELTZER`}</div> */}
          {/* <div className={style.menuItemPrice}>$5.00 glass / $18.00 Bottle</div> */}
        </div>
        <div className={style.menuItemNotes}>
          <span style={{ fontWeight: "bold" }}>Wines</span>
          <br></br>
          <br></br>
          Chardonnay<br></br>
          Cabernet<br></br>
          Moscato<br></br>
          Pinot grigio<br></br>
          <br></br>
          <span style={{ fontWeight: "bold" }}>Seltzers</span>
          <br></br>
          <br></br>
          White Claw Black Cherry<br></br>
          White Claw Mango<br></br>
        </div>
      </div>
      {/* 
      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>SAUVIGNON</div>
          <div className={style.menuItemPrice}>$7.00 Glass / $25.00 Bottle</div>
        </div>
        <div className={style.menuItemNotes}>
          <br></br>
        </div>
      </div> */}

      {/* <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>MUSCAT</div>
          <div className={style.menuItemPrice}>$7.50 Glass / $25.00 Bottle</div>
        </div>
        <div className={style.menuItemNotes}>
          <br></br>
        </div>
      </div> */}

      {/* <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>MERLOT</div>
          <div className={style.menuItemPrice}>$8.00 Glass / $28.00 Bottle</div>
        </div>
        <div className={style.menuItemNotes}>
          <br></br>
        </div>
      </div> */}

      {/* <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>PORT</div>
          <div className={style.menuItemPrice}>
            $10.00 Glass / $35.00 Bottle
          </div>
        </div>
        <div className={style.menuItemNotes}>
          <br></br>
        </div>
      </div> */}

      {/* <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>ZINFANDEL</div>
          <div className={style.menuItemPrice}>$6.00 Glass / $18.00 Bottle</div>
        </div>
        <div className={style.menuItemNotes}>
          <br></br>
        </div>
      </div> */}
    </div>
  );
};

export default DessertMenu;
