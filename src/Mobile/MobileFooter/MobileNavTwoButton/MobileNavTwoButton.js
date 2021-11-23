import React from "react";
import { useHistory } from "react-router-dom";
import "./MobileNavTwoButton.css";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import InfoIcon from "@material-ui/icons/Info";

const MobileNavTwoButton = ({ setNav, setMenu }) => {
  const history = useHistory();

  return (
    <div className="NavBar">
      <div
        className="NavButton"
        onClick={() => {
          history.push("/about-us");
          setNav(true);
        }}
      >
        <InfoIcon style={{ fontSize: "1.25rem", color: "#000000" }} />
        <div className="buttonText">Our Story</div>
      </div>
      <div
        className="NavButton"
        onClick={
          () => history.push("/construction")
          // window.open(
          //   "https://www.clover.com/online-ordering/backwater-bbq-winona"
          // )
        }
      >
        <RestaurantIcon style={{ fontSize: "1.25rem", color: "#000000" }} />
        <div className="buttonText">Online Ordering</div>
      </div>
    </div>
  );
};

export default MobileNavTwoButton;
