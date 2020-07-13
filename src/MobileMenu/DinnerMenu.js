import React from 'react';
import style from "./MobileMenu.module.css";
import CallIcon from '@material-ui/icons/Call';
import companyLogo from "../CompanyImages/FrenchPress.png"
import homePicture from "../CompanyImages/cheese-and-bread.jpg";

const DinnerMenu = () => {

    return (
      <div className={style.menu}>
        {/* Rework this section to map in items */}
        <div className={style.menuItem}>
          <div className={style.menuItemHeader}>
            <div className={style.menuItemTitle}>Shrimp Scampi</div>
            <div className={style.menuItemPrice}>$16.95</div>
          </div>  
            <div className={style.menuItemNotes}>
                Garlicky jumbo shrimp in a lemon butter sauce served over pasta 
            </div>
        </div>

        <div className={style.menuItem}>
          <div className={style.menuItemHeader}>
            <div className={style.menuItemTitle}>Mediterranean Shrimp and Pasta </div>
            <div className={style.menuItemPrice}>$16.95</div>
          </div>
            <div className={style.menuItemNotes}>
                Jumbo shrimp, black olives, sun dried tomatoes, wine and lemon juice served over pasta 
            </div>
        </div>

        <div className={style.menuItem}>
          <div className={style.menuItemHeader}>
            <div className={style.menuItemTitle}>Pork Loin Stuffed with Fennel and Onions</div>
            <div className={style.menuItemPrice}>$21.95</div>
          </div>
            <div className={style.menuItemNotes}>
                Butterflied and stuffed, then rolled and roasted 
            </div>
        </div>

        <div className={style.menuItem}>
          <div className={style.menuItemHeader}>
            <div className={style.menuItemTitle}>Stuffed Portobello Mushroom Caps</div>
            <div className={style.menuItemPrice}>$19.95</div>
          </div>  
            <div className={style.menuItemNotes}>
                Stuffed with a creamy artichoke, garlic and spinach filling and baked. Serving is 2 large caps 
            </div>
        </div>

      </div>
    );

}

export default (DinnerMenu);