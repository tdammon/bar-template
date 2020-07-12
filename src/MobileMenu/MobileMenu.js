import React from 'react';
import style from "./MobileMenu.module.css";
import CallIcon from '@material-ui/icons/Call';
import companyLogo from "../CompanyImages/FrenchPress.png"
import homePicture from "../CompanyImages/cheese-and-bread.jpg";
import hamburgerMenu from "../CompanyImages/hamburgerMenu.png";
import BreakfastMenu from "./BreakfastMenu"
import LunchMenu from "./LunchMenu"
import DinnerMenu from "./DinnerMenu"
import DessertMenu from "./DessertMenu"


const MobileMenu = () => {
  const [menu, setMenu] = React.useState('breakfast');

  const loadMenu = () => {
    switch(menu) {
        case 'breakfast':
        return(<BreakfastMenu />)
        break;
        case 'lunch':
        return(<LunchMenu />)
        break;
        case 'dinner':
        return(<DinnerMenu />)
        break;
        case 'dessert':
        return(<DessertMenu />)
        break;
    }
  }

  const loadImage = () => {
    switch(menu) {
        case 'breakfast':
        return(<div className={style.menuHeader}><img className={style.menuImage} src={homePicture} alt="Bread and Cheese"/><div className={style.menuBanner}>BREAKFAST</div></div>)
        break;
        case 'lunch':
        return(<div><img className={style.menuImage} src={homePicture} alt="Bread and Cheese"/><div>Lunch</div></div>)
        break;
        case 'dinner':
        return(<div><img className={style.menuImage} src={homePicture} alt="Bread and Cheese"/><div>Dinner</div></div>)
        break;
        case 'dessert':
        return(<div><img className={style.menuImage} src={homePicture} alt="Bread and Cheese"/><div>Dessert</div></div>)
        break;
    }
  }

  const changeMenu = list => {
      setMenu(list)
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
        <div className={style.mobileHeader}>
        <div style={{fontFamily: "'Lucida Sans Unicode', Geneva, Verdana, sans-serif", margin: "1rem", height: "3rem", width: "3rem", color: "white", backgroundColor: "rgba(0, 0, 0, 0.9)", alignItems: "center", display: "flex", justifyContent:"center"}}>
          Logo
        </div>
        <div style={{margin: "1.25rem", height: "2.5rem", width: "2.5rem", textAlign: "center"}}>
        <img className={style.menuImage} src={hamburgerMenu} alt="hamburger menu icon"/>
        </div>
        </div>
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
        </div>
      </div>
    );

}

export default (MobileMenu);