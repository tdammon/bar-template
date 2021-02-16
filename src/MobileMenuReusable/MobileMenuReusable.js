import React from "react";
import style from "./MobileMenuReusable.module.css";

const MobileMenuReusable = ({}) => {
  const currentMenu = [
    { title: "Drinks", header: "Cans", item: "Busch Light" },
    { title: "Drinks", header: "Cans", item: "Coors Light" },
    { title: "Drinks", header: "Cans", item: "Pabst Blue Ribbon" },
    { title: "Drinks", header: "Cans", item: "Hamms" },
    { title: "Drinks", header: "Cans", item: "Busch Light NA" },
    { title: "Drinks", header: "Bottles", item: "Bud Light" },
    { title: "Drinks", header: "Bottles", item: "Angry Orchard" },
    { title: "Drinks", header: "Bottles", item: "Corona" },
    { title: "Drinks", header: "Bottles", item: "Bud Light Platinum" },
    { title: "Drinks", header: "Bottles", item: "Michelob Golden" },
    { title: "Drinks", header: "Bottles", item: "Michelob Ultra" },
    { title: "Drinks", header: "Bottles", item: "Coors Light" },
    { title: "Drinks", header: "Bottles", item: "Miller Light" },
    { title: "Drinks", header: "Bottles", item: "Busch Light" },
    { title: "Drinks", header: "Bottles", item: "Miller 64" },
    { title: "Drinks", header: "Bottles", item: "Budweiser" },
    { title: "Drinks", header: "Bottles", item: "High Life" },
    { title: "Drinks", header: "Bottles", item: "Premium Grain Belt" },
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
