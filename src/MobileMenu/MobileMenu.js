import React from 'react';
import style from "./MobileMenu.module.css";
import Header from "../Header/Header"
import CallIcon from '@material-ui/icons/Call';
import companyLogo from "../CompanyImages/FrenchPress.png"
import homePicture from "../CompanyImages/cheese-and-bread.jpg";
import Breakfast from "../CompanyImages/Breakfast.jpg";
import Lunch from "../CompanyImages/Lunch.jpg";
import Dinner from "../CompanyImages/Dinner.jpg";
import Dessert from "../CompanyImages/Dessert.jpg";
import Drinks from "../CompanyImages/Drinks.jpg";
import hamburgerMenu from "../CompanyImages/hamburgerMenu.png";
import BreakfastMenu from "./BreakfastMenu"
import LunchMenu from "./LunchMenu"
import DinnerMenu from "./DinnerMenu"
import DessertMenu from "./DessertMenu"
import DrinksMenu from "./DrinksMenu"
import MenuNavigation from "./MenuNavigation"


const MobileMenu = ({menu, nav, setMenu, setNav}) => {


  const loadMenu = () => {
    switch(menu) {
        case 'breakfast':
        return(<div style={{paddingTop: "33vh"}}><BreakfastMenu /></div>)
        break;
        case 'lunch':
        return(<div style={{paddingTop: "33vh"}}><LunchMenu /></div>)
        break;
        case 'dinner':
        return(<div style={{paddingTop: "33vh"}}><DinnerMenu /></div>)
        break;
        case 'dessert':
        return(<div style={{paddingTop: "33vh"}}><DessertMenu /></div>)
        break;
        case 'drinks':
          return(<div style={{paddingTop: "33vh"}}><DrinksMenu /></div>)
          break;
        case 'nav':
        return(null)
        break;
    }
  }

  const loadImage = () => {
    switch(menu) {
        case 'breakfast':
        return(<div className={style.menuHeader}><img className={style.menuImage} src={Breakfast} alt="Bread and Cheese"/><div className={style.menuBanner}>BREAKFAST</div></div>)
        break;
        case 'lunch':
        return(<div className={style.menuHeader}><img className={style.menuImage} src={Lunch} alt="Bread and Cheese"/><div className={style.menuBanner}>LUNCH</div></div>)
        break;
        case 'dinner':
        return(<div className={style.menuHeader}><img className={style.menuImage} src={Dinner} alt="Bread and Cheese"/><div className={style.menuBanner}>DINNER</div></div>)
        break;
        case 'dessert':
        return(<div className={style.menuHeader}><img className={style.menuImage} src={Dessert} alt="Bread and Cheese"/><div className={style.menuBanner}>DESSERT</div></div>)
        break;
        case 'drinks':
        return(<div className={style.menuHeader}><img className={style.menuImage} src={Drinks} alt="Bread and Cheese"/><div className={style.menuBanner}>DRINKS</div></div>)
        break;
        case 'nav':
        return(null)
        break;
    }
  }

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
        {nav ? <MenuNavigation changeNav={() => setNav(false)} changeMenu={menuPage => setMenu(menuPage)}/> : 
              <div className={style.mainContent}>
              <div className={style.menuNav}>
                <div>
                  {loadImage()}
                </div>
                  {/* <div className={menu ==='breakfast' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('breakfast')}>Breakfast</div>
                  <div className={menu ==='lunch' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('lunch')}>Lunch</div>
                  <div className={menu ==='dinner' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('dinner')}>Dinner</div>
                  <div className={menu ==='dessert' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('dessert')}>Dessert</div> */}
              </div>
                  {loadMenu()}
          </div>}
      </div>
    );

}

export default (MobileMenu);