import React from 'react';
import style from "./MobileMenu.module.css";
import CallIcon from '@material-ui/icons/Call';
import companyLogo from "../CompanyImages/FrenchPress.png"
import homePicture from "../CompanyImages/cheese-and-bread.jpg";
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

  const changeMenu = list => {
      setMenu(list)
  }

    return (
      <div className={style.app}>
        <div className={style.mobileHeader}>
          <div className={style.logoBox}>
            <img className={style.logoPicture} src={companyLogo} alt="French Press Logo" />
          </div>
          <div className={style.contactBox}>
            <a className={style.phoneNumberLink} href="tel:+900300400">
              Call Us!
              <CallIcon style={{fontSize: "3rem"}}/>
            </a>
          </div>
        </div>
        <div className={style.mainContent}>
            <div className={style.menuNav}>
                <div className={menu ==='breakfast' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('breakfast')}>Breakfast</div>
                <div className={menu ==='lunch' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('lunch')}>Lunch</div>
                <div className={menu ==='dinner' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('dinner')}>Dinner</div>
                <div className={menu ==='dessert' ? style.menuNavButtonActive : style.menuNavButton} onClick={()=>changeMenu('dessert')}>Dessert</div>
            </div>
                {loadMenu()}
        </div>
      </div>
    );

}

export default (MobileMenu);