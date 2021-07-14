import React from "react";
import style from "./MenuNavigation.module.css";
import CallIcon from "@material-ui/icons/Call";
import companyLogo from "../CompanyImages/FrenchPress.png";
import homePicture from "../CompanyImages/cheese-and-bread.jpg";

const HappyHourMenu = () => {
  return (
    <div className={style.menu}>
      {/* Rework this section to map in items */}
      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>Specials</div>
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
          <div className={style.menuItemDay}>Monday</div>
          <div className={style.menuItemTime}>2pm - 11 pm</div>
        </div>
        <div className={style.menuItemNotes} style={{ marginLeft: "1rem" }}>
          $3.00 rail mixers<br></br> $2.50 domestic bottles<br></br> $3.00 22oz
          mich golden and coors lt drafts
        </div>
        <br></br>
        <div className={style.menuItemTime}>9pm - 1am</div>
        <div className={style.menuItemNotes} style={{ marginLeft: "1rem" }}>
          $4.00 22oz rail mixers<br></br> $3.00 22 oz mich/coors lt drafts
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemDay}>Tuesday</div>
          <div className={style.menuItemTime}>2pm - 7pm</div>
        </div>
        <div className={style.menuItemNotes} style={{ marginLeft: "1rem" }}>
          $3.00 rail mixers<br></br> $2.50 domestic bottles<br></br> $3.00 22oz
          mich golden and coors lt drafts
        </div>
        <br></br>
        <div className={style.menuItemTime}>9pm - 1am</div>
        <div className={style.menuItemNotes} style={{ marginLeft: "1rem" }}>
          $5.00 32oz rail pitchers<br></br> $3.00 32oz mich/coors lt pitchers
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemDay}>Wednesday</div>
          <div className={style.menuItemTime}>2pm - 7pm</div>
        </div>
        <div className={style.menuItemNotes} style={{ marginLeft: "1rem" }}>
          $3.00 rail mixers<br></br> $2.50 domestic bottles<br></br> $3.00 22oz
          mich golden and coors lt drafts
        </div>
        <br></br>
        <div className={style.menuItemTime}>9pm - close</div>
        <div className={style.menuItemNotes} style={{ marginLeft: "1rem" }}>
          $10 96oz hopper coors/mich Holden<br></br> $3 stoli mixers (naked,
          blueberry, orange, raspberry)
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemDay}>Thursday</div>
          <div className={style.menuItemTime}>2pm - 7pm</div>
        </div>
        <div className={style.menuItemNotes} style={{ marginLeft: "1rem" }}>
          $3.00 rail mixers<br></br> $2.50 domestic bottles<br></br> $3.00 22oz
          mich golden and coors lt drafts
        </div>
        <br></br>
        <div className={style.menuItemTime}>9pm - close</div>
        <div className={style.menuItemNotes} style={{ marginLeft: "1rem" }}>
          $2.00 rail mixers<br></br> $3.00 22oz mich/coors lt drafts
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemDay}>Friday</div>
          <div className={style.menuItemTime}>2pm - 7pm</div>
        </div>
        <div className={style.menuItemNotes} style={{ marginLeft: "1rem" }}>
          $3.00 rail mixers<br></br> $2.50 domestic bottles<br></br> $3.00 22oz
          mich golden and coors lt drafts
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemDay}>Saturday</div>
          <div className={style.menuItemTime}>11am - 7pm</div>
        </div>
        <div className={style.menuItemNotes} style={{ marginLeft: "1rem" }}>
          $3.00 rail mixers<br></br> $2.50 domestic bottles<br></br> $3.00 22oz
          mich golden and coors lt drafts
        </div>
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemDay}>Sunday</div>
          <div className={style.menuItemTime}>11am - 7pm</div>
        </div>
        <div className={style.menuItemNotes} style={{ marginLeft: "1rem" }}>
          $3.00 rail mixers<br></br> $2.50 domestic bottles<br></br> $3.00 22oz
          mich golden and coors lt drafts
        </div>
      </div>
    </div>
  );
};

export default HappyHourMenu;
