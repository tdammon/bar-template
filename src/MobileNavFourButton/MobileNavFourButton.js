import React from "react";
import { useHistory } from "react-router-dom";
import style from "./MobileNavFourButton.module.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import CreateIcon from "@material-ui/icons/Create";
import RestaurantMenuOutlinedIcon from "@material-ui/icons/RestaurantMenuOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const MobileNavFourButton = () => {
  const history = useHistory();

  return (
    <div className={style.NavBar}>
      <div className={style.NavButton} onClick={() => history.push("/menu")}>
        <HomeOutlinedIcon style={{ fontSize: "1.25rem" }} />
        <div className={style.buttonText}>Drinks</div>
      </div>
      <div
        className={style.NavButton}
        onClick={() => history.push("/specials")}
      >
        <CalendarTodayIcon style={{ fontSize: "1.25rem" }} />
        <div className={style.buttonText}>Events</div>
      </div>
      <div
        className={style.NavButton}
        onClick={() => history.push("/catering")}
      >
        <StarBorderOutlinedIcon style={{ fontSize: "1.25rem" }} />
        <div className={style.buttonText}>Specials</div>
      </div>
      <a className={style.NavButton} href="tel:+900300400">
        <PhoneOutlinedIcon style={{ fontSize: "1.25rem" }} />
        <div className={style.buttonText}>Call Now</div>
      </a>
    </div>
  );
};

export default MobileNavFourButton;
