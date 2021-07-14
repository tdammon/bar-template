import React from "react";
import style from "./MobileMenuReusable.module.css";
import MenuNavigation from "../MobileMenuNavigation/MobileMenuNavigation";

const MobileMenuReusable = ({ nav, setNav, setFilter, menuList, filter }) => {
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
    return temp;
  };

  const getTime = (menu, type) => {
    let tempList = menu.filter((e) => e.group_type === type);
    let temp = [];
    for (let item of tempList) {
      if (item.time) {
        if (temp.indexOf(item.time) === -1) {
          temp.push(item.time);
        }
      } else {
        temp.push(null);
        break;
      }
    }
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
    <div className={style.app}>
      {nav ? (
        <MenuNavigation
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
              {getTime(filteredList, group_type).map((time, index) => (
                <div key={index}>
                  {time ? <div className={style.time}>{time}</div> : null}
                  <div className={style.menuList}>
                    {time
                      ? filteredList
                          .filter(
                            (e) =>
                              e.group_type === group_type && e.time === time
                          )
                          .map((item, ind) => (
                            <div className={style.menuItem} key={ind}>
                              {item.item}
                            </div>
                          ))
                      : filteredList
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
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenuReusable;
