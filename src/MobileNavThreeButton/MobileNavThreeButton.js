import React from "react";
import { useHistory } from "react-router-dom";
import style from "./MobileNavThreeButton.module.css";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

const MobileNavThreeButton = ({ setNav, setMenu }) => {
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
        <LocalBarIcon style={{ fontSize: "1.25rem" }} />
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
        <StarBorderOutlinedIcon style={{ fontSize: "1.25rem" }} />
        <div className={style.buttonText}>Specials</div>
      </div>
      <div className={style.NavButton} onClick={() => history.push("/")}>
        <HomeIcon style={{ fontSize: "1.25rem" }} />
        <div className={style.buttonText}>About Us</div>
      </div>
    </div>
  );
};

export default MobileNavThreeButton;
