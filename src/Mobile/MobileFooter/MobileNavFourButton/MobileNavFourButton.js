import React from "react";
import { useHistory } from "react-router-dom";
import style from "./MobileNavFourButton.module.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import InfoIcon from "@material-ui/icons/Info";
import RestaurantIcon from "@material-ui/icons/Restaurant";

const MobileNavFourButton = ({ setNav, setFilter }) => {
  const history = useHistory();

  return (
    <div className={style.NavBar}>
      <div
        className={style.NavButton}
        onClick={() => {
          history.push("/about-us");
          setNav(true);
        }}
      >
        <InfoIcon style={{ fontSize: "1.25rem", color: "#000000" }} />
        <div className={style.buttonText}>Our Story</div>
      </div>
      <div
        className={style.NavButton}
        onClick={() => {
          history.push("/directions");
          setNav(false);
          setFilter("Specials");
        }}
      >
        <ExploreIcon style={{ fontSize: "1.25rem", color: "#000000" }} />
        <div className={style.buttonText}>Directions</div>
      </div>
      <div
        className={style.NavButton}
        onClick={() => {
          history.push("/menu");
          setNav(false);
        }}
      >
        <RestaurantIcon style={{ fontSize: "1.25rem", color: "#000000" }} />
        <div className={style.buttonText}>Menu</div>
      </div>
      <div
        className={style.NavButton}
        onClick={() => {
          history.push("/order");
          setNav(false);
        }}
      >
        <StarBorderOutlinedIcon
          style={{ fontSize: "1.25rem", color: "#000000" }}
        />
        <div className={style.buttonText}>Order Now</div>
      </div>
    </div>
  );
};

export default MobileNavFourButton;
