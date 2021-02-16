import React from "react";
import style from "./MobileMenu.module.css";
import CallIcon from "@material-ui/icons/Call";
import companyLogo from "../CompanyImages/FrenchPress.png";
import homePicture from "../CompanyImages/cheese-and-bread.jpg";

const CanMenu = () => {
  return (
    <div className={style.menu}>
      
      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>{`Bottles & Cans`}</div>
          
        </div>
        <div className={style.menuItemNotes}>
          <span
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              marginLeft: "-1rem",
            }}
          >
            Bottles
          </span>
          <br></br>
          <br></br>
          Bud Light <br></br>
          Angry Orchard <br></br>
          Corona <br></br>
          Bud Light Platinum<br></br>
          Michelob Golden <br></br>
          Michelob Ultra <br></br>
          Coors Light <br></br>
          Miller Light<br></br>
          Busch Light <br></br>
          Miller 64 <br></br>
          Budweiser <br></br>
          High Life <br></br>
          Premium Grain Belt <br></br>
          <br></br>
          <span
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              marginLeft: "-1rem",
            }}
          >
            Cans
          </span>
          <br></br>
          <br></br>
          Busch Light <br></br>
          Coors Light <br></br>
          Pabst Blue Ribbon <br></br>
          Hamms<br></br>
          Busch Light NA <br></br>
        </div>
      </div>
    </div>
  );
};

export default CanMenu;
