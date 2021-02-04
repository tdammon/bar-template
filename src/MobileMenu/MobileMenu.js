import React from "react";
import style from "./MobileMenu.module.css";
import Header from "../Header/Header";
import CallIcon from "@material-ui/icons/Call";
import companyLogo from "../CompanyImages/FrenchPress.png";
import homePicture from "../CompanyImages/Port507Bar.jpg";

import Beer from "../CompanyImages/Beer.jpg";
import BeerBottle from "../CompanyImages/BeerBottle.jpg";
import Soda from "../CompanyImages/Soda.jpg";

import Wine from "../CompanyImages/Wine.jpg";
import Dinner from "../CompanyImages/Dinner.jpg";
import Dessert from "../CompanyImages/Dessert.jpg";
import Drinks from "../CompanyImages/Drinks.jpg";
import hamburgerMenu from "../CompanyImages/hamburgerMenu.png";
import TapsMenu from "./TapsMenu";
import WineMenu from "./WineMenu";
import HappyHourMenu from "./HappyHourMenu";
import SnackMenu from "./SnackMenu";
import CanMenu from "./CanMenu";
import ExtrasMenu from "./ExtrasMenu";

import MenuNavigation from "./MenuNavigation";

const MobileMenu = ({ menu, nav, setMenu, setNav }) => {
  const loadMenu = () => {
    if (nav) {
      return (
        <MenuNavigation
          setMenu={setMenu}
          setNav={setNav}
          menu={menu}
          nav={nav}
        />
      );
    } else {
      switch (menu) {
        case "beer":
          return (
            <div>
              <TapsMenu />
            </div>
          );
          break;
        case "wine":
          return (
            <div>
              <WineMenu />
            </div>
          );
          break;
        case "cocktails":
          return (
            <div>
              <HappyHourMenu />
            </div>
          );
          break;
        case "snacks":
          return (
            <div>
              <SnackMenu />
            </div>
          );
          break;
        case "drinks":
          return (
            <div>
              <CanMenu />
            </div>
          );
          break;
        case "extras":
          return (
            <div>
              <ExtrasMenu />
            </div>
          );
          break;
        case "nav":
          return null;
          break;
      }
    }
  };

  return (
    <div
      className={style.app}
      style={{
        backgroundImage: `url(${homePicture})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <img className={style.textBlock} src={homePicture} /> */}
      <div
        className={style.textBlock}
        style={{
          backgroundImage: `url(${homePicture})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className={style.mobileMenu}>{loadMenu()}</div>
      <div
        className={style.textBlockBottom}
        style={{
          backgroundImage: `url(${homePicture})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>
    </div>
  );
};

export default MobileMenu;
