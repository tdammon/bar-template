import React from "react";
import style from "./MobileMenu.module.css";
import CallIcon from "@material-ui/icons/Call";
import companyLogo from "../CompanyImages/FrenchPress.png";
import homePicture from "../CompanyImages/cheese-and-bread.jpg";

const DinnerMenu = () => {
  return (
    <div className={style.menu}>
      {/* Rework this section to map in items */}
      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>MOSCOW MULE</div>
          <div className={style.menuItemPrice}>$6.00</div>
        </div>
        <div className={style.menuItemNotes}>
          House vodka mixed with ginger beer and lime juice, poured into a
          copper cup.
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>WHITE RUSSIAN</div>
          <div className={style.menuItemPrice}>$7.50</div>
        </div>
        <div className={style.menuItemNotes}>
          Grey Goose and Kahlua with a splash of cream, served over ice.
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>TEQUILA SUNRISE</div>
          <div className={style.menuItemPrice}>$9.00</div>
        </div>
        <div className={style.menuItemNotes}>
          Tequila mixed with orange juice, poured into a glass of ice, and
          topped with grenadine.
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>MOJITO</div>
          <div className={style.menuItemPrice}>$7.50</div>
        </div>
        <div className={style.menuItemNotes}>
          White rum mixed with sugar and mint, topped with soda water and a
          splash of freshly squeezed lime juice.
        </div>
      </div>
    </div>
  );
};

export default DinnerMenu;
