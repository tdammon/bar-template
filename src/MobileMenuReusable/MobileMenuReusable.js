import React from "react";
import style from "./MobileMenuReusable.module.css";

const MobileMenuReusable = ({}) => {
  const currentMenu = [
    { title: "Drinks", header: "Cans", item: "Blue Moon" },
    { title: "Drinks", header: "Cans", item: "Blue " },
    { title: "Drinks", header: "Bottles", item: " Moon" },
  ];

  const title = "Bottles & Cans";

  const getHeaders = (menu) => {
    let temp = [];
    for (let item of menu) {
      if (temp.indexOf(item.header) === -1) {
        temp.push(item.header);
      }
    }
    return temp;
    // setResult([...temp]);
  };

  React.useEffect(() => {}, currentMenu);

  return (
    <div className={style.menu}>
      <div className={style.menuItemTitle}>{title}</div>
      {getHeaders(currentMenu).map((header, index) => (
        <div key={index}>
          <div className={style.menuHeader}>{header}</div>
          <div className={style.menuList}>
            {currentMenu
              .filter((e) => e.header === header)
              .map((item, ind) => (
                <div className={style.menuItem} key={ind}>
                  {item.item}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileMenuReusable;
