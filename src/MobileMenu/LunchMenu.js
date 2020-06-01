import React from 'react';
import style from "./MobileMenu.module.css";
import CallIcon from '@material-ui/icons/Call';
import companyLogo from "../CompanyImages/FrenchPress.png"
import homePicture from "../CompanyImages/cheese-and-bread.jpg";

const LunchMenu = () => {

    return (

        
            <div className={style.menu}>
             {/* Rework this section to map in items */}
             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#1</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>Meatloaf</div>
                <div className={style.menuItemPrice}>$10.95</div>
                <div className={style.menuItemNotes}>
                Thick slice of house made meatloaf, slice of cheddar, spicy ketchup glaze, and bread
                and butter pickles on a toasted bun. Served with hand cut French fries 
                </div>
              </div>
             </div>

             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#2</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>Ugly Burger </div>
                <div className={style.menuItemPrice}>$10.95</div>
                <div className={style.menuItemNotes}>
                8 oz of fresh ground chuck, Cheddar cheese, tomato, lettuce, ugly sauce on a toasted
                bun. Served with hand cut French fries 
                </div>
              </div>
             </div>

             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#3</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>Chipotle Black Bean Burger</div>
                <div className={style.menuItemPrice}>$10.95</div>
                <div className={style.menuItemNotes}>
                Spicy black bean burger served with salsa ranch and avocado on a toasted bun.
                Served with hand cut French fries 
                </div>
              </div>
             </div>

             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#4</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>Asian Chicken Wrap</div>
                <div className={style.menuItemPrice}>$8.95</div>
                <div className={style.menuItemNotes}>
                Roasted chicken and cabbage, red pepper and carrot slaw seasoned with Asian
                peanut sauce and wrapped in a whole grain tortilla 
                </div>
              </div>
             </div>

             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#5</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>Tarragon Chicken Salad</div>
                <div className={style.menuItemPrice}>$9.95</div>
                <div className={style.menuItemNotes}>
                Roasted chicken, sliced grapes, fresh tarragon and mayonnaise served on whole
                grain bread with curly green lettuce or wrapped in whole grain tortilla 
                </div>
              </div>
             </div>

             <div className={style.menuItem}>
              <div className={style.inlineImage}>
                <div className={style.menuItemNumber}>#6</div>
                <img className={style.menuItemImage} src={homePicture} alt="Bread and Cheese"/>
              </div>
              <div className={style.inline}>
                <div className={style.menuItemTitle}>BBQ Brisket Sandwich</div>
                <div className={style.menuItemPrice}>$10.95</div>
                <div className={style.menuItemNotes}>
                Slow roasted brisket sliced thin, piled high and served with our French Press sweet
                and spicy BBQ sauce on a toasted bun. Served with hand cut French fries 
                </div>
              </div>
             </div>
          </div>
    );

}

export default (LunchMenu);