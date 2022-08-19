import React from "react";
import { useHistory } from "react-router-dom";
import style from "./MobileNavTwoButton.module.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";

const MobileNavFourButton = ({ setNav, setFilter }) => {
  const history = useHistory();

  return (
    <div className={style.NavBar}>
      <div
        className={style.NavButton}
        onClick={() => {
          history.push("/");
          setNav(false);
        }}
      >
        <HomeIcon style={{ fontSize: "1.25rem", color: "#000000" }} />
        <div className={style.buttonText}>About Us</div>
      </div>
      <div
        className={style.NavButton}
        onClick={() => {
          history.push("/directions");
          setNav(false);
        }}
      >
        <ExploreIcon style={{ fontSize: "1.25rem", color: "#000000" }} />
        <div className={style.buttonText}>Directions</div>
      </div>
    </div>
  );
};

export default MobileNavFourButton;
