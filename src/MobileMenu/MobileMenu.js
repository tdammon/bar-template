import React from "react";
import style from "./MobileMenu.module.css";
import Header from "../Header/Header";
import CallIcon from "@material-ui/icons/Call";
import companyLogo from "../CompanyImages/FrenchPress.png";
import homePicture from "../CompanyImages/cheese-and-bread.jpg";
import Beer from "../CompanyImages/Beer.jpg";
import Wine from "../CompanyImages/Wine.jpg";
import Dinner from "../CompanyImages/Dinner.jpg";
import Dessert from "../CompanyImages/Dessert.jpg";
import Drinks from "../CompanyImages/Drinks.jpg";
import hamburgerMenu from "../CompanyImages/hamburgerMenu.png";
import BeerMenu from "./BeerMenu";
import WineMenu from "./WineMenu";
import CocktailMenu from "./CocktailMenu";
import SnackMenu from "./SnackMenu";
import DrinksMenu from "./DrinksMenu";
import MenuNavigation from "./MenuNavigation";

const MobileMenu = ({ menu, nav, setMenu, setNav }) => {
  const loadMenu = () => {
    switch (menu) {
      case "beer":
        return (
          <div style={{ paddingTop: "33vh" }}>
            <BeerMenu />
          </div>
        );
        break;
      case "wine":
        return (
          <div style={{ paddingTop: "33vh" }}>
            <WineMenu />
          </div>
        );
        break;
      case "cocktails":
        return (
          <div style={{ paddingTop: "33vh" }}>
            <CocktailMenu />
          </div>
        );
        break;
      case "snacks":
        return (
          <div style={{ paddingTop: "33vh" }}>
            <SnackMenu />
          </div>
        );
        break;
      // case 'drinks':
      //   return(<div style={{paddingTop: "33vh"}}><DrinksMenu /></div>)
      //   break;
      case "nav":
        return null;
        break;
    }
  };

  const loadImage = () => {
    switch (menu) {
      case "beer":
        return (
          <div className={style.menuHeader}>
            <img
              className={style.menuImage}
              src={Beer}
              alt="Bread and Cheese"
            />
            <div className={style.menuBanner}>BEER</div>
          </div>
        );
        break;
      case "wine":
        return (
          <div className={style.menuHeader}>
            <img
              className={style.menuImage}
              src={Wine}
              alt="Bread and Cheese"
            />
            <div className={style.menuBanner}>WINE</div>
          </div>
        );
        break;
      case "cocktails":
        return (
          <div className={style.menuHeader}>
            <img
              className={style.menuImage}
              src={Drinks}
              alt="Bread and Cheese"
            />
            <div className={style.menuBanner}>COCKTAILS</div>
          </div>
        );
        break;
      case "snacks":
        return (
          <div className={style.menuHeader}>
            <img
              className={style.menuImage}
              src={Dinner}
              alt="Bread and Cheese"
            />
            <div className={style.menuBanner}>SNACKS</div>
          </div>
        );
        break;
      // case "drinks":
      //   return (
      //     <div className={style.menuHeader}>
      //       <img
      //         className={style.menuImage}
      //         src={Drinks}
      //         alt="Bread and Cheese"
      //       />
      //       <div className={style.menuBanner}>DRINKS</div>
      //     </div>
      //   );
      //   break;
      case "nav":
        return null;
        break;
    }
  };

  return (
    <div className={style.app}>
      {/* <div className={style.mobileHeader}>
          <div className={style.logoBox}>
            <img className={style.logoPicture} src={companyLogo} alt="French Press Logo" />
          </div>
          <div className={style.contactBox}>
            <a className={style.phoneNumberLink} href="tel:+900300400">
              Call Us!
              <CallIcon style={{fontSize: "3rem"}}/>
            </a>
          </div>
        </div> */}
      {/* <div className={style.mobileHeader}>
          <div style={{fontFamily: "Montserrat-Thin", margin: "1rem", height: "3rem", width: "3rem", color: "white", backgroundColor: "rgba(0, 0, 0, 0.9)", alignItems: "center", display: "flex", justifyContent:"center"}}>
            Logo
          </div>
          <div style={{margin: "1.25rem", height: "2.5rem", width: "2.5rem", textAlign: "center"}}>
            <img className={style.menuImage} src={hamburgerMenu} alt="hamburger menu icon" onClick={()=>{setNav(true); setMenu('nav')}}/>
          </div>
        </div> */}
      {nav ? (
        <MenuNavigation
          changeNav={() => setNav(false)}
          changeMenu={(menuPage) => setMenu(menuPage)}
        />
      ) : (
        <div className={style.mainContent}>
          <div className={style.menuNav}>
            <div>{loadImage()}</div>
            {/* <div className={menu ==='breakfast' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('breakfast')}>Breakfast</div>
                  <div className={menu ==='lunch' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('lunch')}>Lunch</div>
                  <div className={menu ==='dinner' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('dinner')}>Dinner</div>
                  <div className={menu ==='dessert' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('dessert')}>Dessert</div> */}
          </div>
          {loadMenu()}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
