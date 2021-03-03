import React from "react";
import style from "./MobileMenuReusable.module.css";
import MenuNavigation from "../MobileMenu/MenuNavigation";
import homePicture from "../CompanyImages/Port507Bar.jpg";

const MobileMenuReusable = ({
  nav,
  setMenu,
  setNav,
  setFilter,
  menuList,
  filter,
}) => {
  const [filteredList, setFilteredList] = React.useState([]);

  const getGroupNames = (menu) => {
    let tempList = menuList;
    let newList = tempList.filter((e) => e.group_name === filter);
    let temp = [];
    for (let item of newList) {
      if (item.group_type) {
        if (temp.indexOf(item.group_type) === -1) {
          temp.push(item.group_type);
        }
      } else {
        temp.push(null);
        break;
      }
    }
    console.log(temp);

    return temp;
  };

  React.useEffect(() => {
    let tempList = menuList;
    let newList = tempList.filter((e) => e.group_name == filter);
    setFilteredList(newList);
    if (!filter) {
      setNav(true);
    }
  }, [menuList, filter]);

  return (
    <div
      className={style.app}
      style={{
        backgroundImage: `url(${homePicture})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {nav ? (
        <MenuNavigation
          setMenu={setMenu}
          setNav={setNav}
          menuList={menuList}
          nav={nav}
          setFilter={setFilter}
        />
      ) : (
        <div className={style.menu}>
          <div className={style.menuItemTitle}>{filter}</div>
          {getGroupNames(menuList).map((group_type, index) => (
            <div key={index}>
              <div className={style.menuHeader}>{group_type}</div>
              <div className={style.menuList}>
                {filteredList
                  .filter((e) => e.group_type === group_type)
                  .map((item, ind) => (
                    <div className={style.menuItem} key={ind}>
                      {item.item}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenuReusable;
