import React from 'react';
import style from "./MobileMenu.module.css";
import { useHistory } from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import companyLogo from "../CompanyImages/FrenchPress.png"
import homePicture from "../CompanyImages/cheese-and-bread.jpg";

const MobileMenu = () => {
  const history = useHistory()

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
                <div className={style.menuNavButton}>Breakfast</div>
                <div className={style.menuNavButton}>Lunch</div>
                <div className={style.menuNavButton}>Dinner</div>
                <div className={style.menuNavButton}>Dessert</div>
            </div>
            <div className={style.menu}>
             {/* Rework this section to map in items */}
             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#1</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>Expresso Shot</div>
                <div className={style.menuItemPrice}>$2.75</div>
                <div className={style.menuItemNotes}>
                Six bean blend, rich and smooth. 
                </div>
              </div>
             </div>

             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#2</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>The French Press</div>
                <div className={style.menuItemPrice}>$6.95</div>
                <div className={style.menuItemNotes}>
                French pressed full bodied brew. In house only and steeped at your table. Serves 2
                </div>
              </div>
             </div>

             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#3</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>Fresh Brewed Coffee</div>
                <div className={style.menuItemPrice}>$2.39</div>
                <div className={style.menuItemNotes}>
                Hand brewed coffee 
                </div>
              </div>
             </div>

             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#4</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>Americano</div>
                <div className={style.menuItemPrice}>$3.00 / $5.00</div>
                <div className={style.menuItemNotes}>
                Expresso + hot water 
                </div>
              </div>
             </div>

             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#5</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>Latte with flavor</div>
                <div className={style.menuItemPrice}>$5.00/$5.50</div>
                <div className={style.menuItemNotes}>
                Espresso + Steamed milk + pump of flavor
                </div>
              </div>
             </div>

             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#6</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>Whipped Hot Chocolate</div>
                <div className={style.menuItemPrice}>$4.50 / $5.50</div>
                <div className={style.menuItemNotes}>
                Whipped milk, cream, semisweet and milk chocolate, sugar and vanilla. Topped with whipped cream
                </div>
              </div>
             </div>
          </div>
        </div>
      </div>
    );

}

export default (MobileMenu);