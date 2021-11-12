import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./DesktopHeader.css";
import Logo from "../../CompanyImages/BackwaterLogo.jpg";

const DesktopHeader = ({ setNav, nav }) => {
  const [activeTab, setActiveTab] = React.useState("");
  const history = useHistory();
  let location = useLocation();

  React.useEffect(() => {
    console.log(location.pathname);
  });

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
            location.pathname === "/about-us"
              ? "activeTab desktopHeaderButton"
              : "desktopHeaderButton"
          }
          onClick={() => {
            history.push("/about-us");
          }}
        >
          Our Story
        </button>
        <button
          className="desktopHeaderButton"
          onClick={() =>
            window.open(
              "https://www.clover.com/online-ordering/backwater-bbq-winona"
            )
          }
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
