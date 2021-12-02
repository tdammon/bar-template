import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import style from "./DesktopMenu.module.css";
import MenuCenter from "../../CompanyImages/BBQMenuRight.jpg";
import MenuRight from "../../CompanyImages/BBQMenuLeft.jpg";
import MenuLeft from "../../CompanyImages/BBQMenuCenter.jpg";

const DesktopMenu = () => {
  const [imageDisplay, setImageDisplay] = React.useState(1);
  const history = useHistory();

  const updateImageUp = () => {
    if (imageDisplay < 3) {
      const numHolder = imageDisplay + 1;
      setImageDisplay(numHolder);
    }
  };

  const updateImageDown = () => {
    if (imageDisplay > 1) {
      const numHolder = imageDisplay - 1;
      setImageDisplay(numHolder);
    }
  };
  React.useEffect(() => {
    const img = new Image();
    const img2 = new Image();
    const img3 = new Image();

    img.src = MenuRight;
    img2.src = MenuCenter;
    img3.src = MenuLeft;
  });

  return (
    <BrowserView>
      <div className={style.app}>
        <div className={style.mainContent}>
          <button
            onClick={() => updateImageDown()}
            className={style.nextButton}
            style={{ visibility: imageDisplay === 1 ? "hidden" : null }}
          >
            {"<"}
          </button>

          {imageDisplay === 1 && (
            <div>
              <img
                className={style.menuImage}
                src={MenuRight}
                alt="right menu"
              />
            </div>
          )}
          {imageDisplay === 2 && (
            <div>
              <img className={style.menuImage} src={MenuLeft} alt="left menu" />
            </div>
          )}
          {imageDisplay === 3 && (
            <div>
              <img
                className={style.menuImage}
                src={MenuCenter}
                alt="center menu"
              />
            </div>
          )}
          {imageDisplay !== 3 && (
            <button
              onClick={() => updateImageUp()}
              className={style.nextButton}
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    </BrowserView>
  );
};

export default DesktopMenu;
