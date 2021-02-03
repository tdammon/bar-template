import React from "react";
import { useHistory } from "react-router-dom";
import style from "./MobileNavFourButton.module.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import CreateIcon from "@material-ui/icons/Create";
import RestaurantMenuOutlinedIcon from "@material-ui/icons/RestaurantMenuOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import LocalBarIcon from "@material-ui/icons/LocalBar";

const MobileNavFourButton = ({ setNav, setMenu }) => {
  const history = useHistory();

  return (
    <div className={style.NavBar}>
      <div
        className={style.NavButton}
        onClick={() => {
          history.push("/menu");
          setNav(true);
        }}
      >
        <LocalBarIcon style={{ fontSize: "1.25rem", color: "#000000" }} />
        <div className={style.buttonText}>Drinks</div>
      </div>
      <div
        className={style.NavButton}
        onClick={() => {
          history.push("/menu");
          setNav(false);
          setMenu("cocktails");
        }}
      >
        <StarBorderOutlinedIcon
          style={{ fontSize: "1.25rem", color: "#000000" }}
        />
        <div className={style.buttonText}>Specials</div>
      </div>
      <div className={style.NavButton} onClick={() => history.push("/")}>
        <HomeIcon style={{ fontSize: "1.25rem", color: "#000000" }} />
        <div className={style.buttonText}>About Us</div>
      </div>
      <div
        className={style.NavButton}
        onClick={() => history.push("/directions")}
      >
        <ExploreIcon style={{ fontSize: "1.25rem", color: "#000000" }} />
        <div className={style.buttonText}>Directions</div>
      </div>
    </div>
  );
};

export default MobileNavFourButton;
