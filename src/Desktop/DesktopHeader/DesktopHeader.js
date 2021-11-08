import React from "react";
import { useHistory } from "react-router-dom";
import "./DesktopHeader.css";
import Logo from "../../CompanyImages/BackwaterFacebookLogo.jpg";

const DesktopHeader = ({ setNav, nav }) => {
  const [activeTab, setActiveTab] = React.useState("");
  const history = useHistory();

  return (
    <div className="desktopHeader">
      <div
        className="desktopHeaderLogo"
        onClick={() => {
          history.push("/");
        }}
      >
        <img className="menuImage" src={Logo} alt="company logo" />
        {/* <div style={{ whiteSpace: "nowrap" }}>Backwater BBQ</div> */}
      </div>
      <div className="desktopHeaderRoutes">
        {/* <button
          className={style.desktopHeaderButton}
          onClick={() => history.push("/")}
        >
          Home
        </button> */}
        <button
          className={
            activeTab === "0"
              ? "activeTab desktopHeaderButton"
              : "desktopHeaderButton"
          }
          onClick={() => {
            history.push("/about-us");
            setActiveTab("0");
          }}
        >
          Our Story
        </button>
        <button
          className="desktopHeaderButton"
          onClick={() => history.push("/order")}
        >
          Online Ordering
        </button>
        {/* <button
          className={style.desktopHeaderButton}
          onClick={() => history.push("/specials")}
        >
          Specials
        </button> */}
      </div>
    </div>
  );
};

export default DesktopHeader;
