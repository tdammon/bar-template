import React from "react";
import style from "./MobileMenu.module.css";
import CallIcon from "@material-ui/icons/Call";
import companyLogo from "../CompanyImages/FrenchPress.png";
import homePicture from "../CompanyImages/cheese-and-bread.jpg";

const HappyHourMenu = () => {
  return (
    <div className={style.menu}>
      {/* Rework this section to map in items */}
      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>SPECIALS</div>
          <div className={style.menuItemPrice}>
            {/* Monday- Friday 2-7<br></br>sat and sun from 11-7 */}
          </div>
        </div>
        {/* <div className={style.menuItemNotes}>
          Monday - Friday 2-7<br></br>Sat and Sun 11-7
        </div> */}
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>Monday 2-7 pm</div>
          {/* <div className={style.menuItemPrice}>$7.50</div> */}
        </div>
        <div className={style.menuItemNotes}>
          $3.00 rail mixers, $2.50 domestic bottles, $3.00 22oz mich golden and
          coors lt drafts
        </div>
        <br></br>
        <div className={style.menuItemTitle}>9-1am</div>
        <div className={style.menuItemNotes}>
          $4.00 22oz rail mixers $3.00 22 oz mich/coors lt drafts
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>Tuesday 2-7 pm</div>
          {/* <div className={style.menuItemPrice}>$9.00</div> */}
        </div>
        <div className={style.menuItemNotes}>
          $3.00 rail mixers, $2.50 domestic bottles, $3.00 22oz mich golden and
          coors lt drafts
        </div>
        <br></br>
        <div className={style.menuItemTitle}>9pm - 1am</div>
        <div className={style.menuItemNotes}>
          $5.00 32oz rail pitchers, $3.00 32oz mich/coors lt pitchers
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>Wednesday 2-7 pm</div>
          {/* <div className={style.menuItemPrice}>$7.50</div> */}
        </div>
        <div className={style.menuItemNotes}>
          $3.00 rail mixers, $2.50 domestic bottles, $3.00 22oz mich golden and
          coors lt drafts
        </div>
        <br></br>
        <div className={style.menuItemTitle}>9pm - close</div>
        <div className={style.menuItemNotes}>
          $10 96oz hopper coors/mich Holden $3 stoli mixers (naked, blueberry,
          orange, raspberry)
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>Thursday 2-7 pm</div>
          {/* <div className={style.menuItemPrice}>$7.50</div> */}
        </div>
        <div className={style.menuItemNotes}>
          $3.00 rail mixers, $2.50 domestic bottles, $3.00 22oz mich golden and
          coors lt drafts
        </div>
        <br></br>
        <div className={style.menuItemTitle}>9pm - close</div>
        <div className={style.menuItemNotes}>
          $2.00 rail mixers, $3.00 22oz mich/coors lt drafts
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>Friday 2-7 pm</div>
          {/* <div className={style.menuItemPrice}>$7.50</div> */}
        </div>
        <div className={style.menuItemNotes}>
          $3.00 rail mixers, $2.50 domestic bottles, $3.00 22oz mich golden and
          coors lt drafts
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>Saturday 11am-7pm</div>
          {/* <div className={style.menuItemPrice}>$7.50</div> */}
        </div>
        <div className={style.menuItemNotes}>
          $3.00 rail mixers, $2.50 domestic bottles, $3.00 22oz mich golden and
          coors lt drafts
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>Sunday 11am-7pm</div>
          {/* <div className={style.menuItemPrice}>$7.50</div> */}
        </div>
        <div className={style.menuItemNotes}>
          $3.00 rail mixers, $2.50 domestic bottles, $3.00 22oz mich golden and
          coors lt drafts
        </div>
      </div>
    </div>
  );
};

export default HappyHourMenu;
