import React from 'react';
import style from "./MobileMenu.module.css";

const MenuNavigation = ({changeNav, changeMenu}) => {

    return (
      <div style={{backgroundColor: "darkgrey", height: "100vh", width: "100%", position: "absolute", zIndex: "999", padding: "3rem", overflowX: "hidden",}}>
        <div>
            <button onClick={()=>{changeMenu('starters');  changeNav()}} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>STARTERS</button>
        </div>
        <div>
            <button onClick={()=>{changeMenu('breakfast'); changeNav()}} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>BREAKFAST</button>
        </div>
        <div>
            <button onClick={()=>{changeMenu('lunch'); changeNav()}} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>LUNCH</button>
        </div>
        <div>
            <button onClick={()=>{changeMenu('dinner'); changeNav()}} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>DINNER</button>
        </div>
        <div>
            <button onClick={()=>{changeMenu('dessert'); changeNav()}} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>DESSERT</button>
        </div>
        <div>
            <button onClick={()=>{changeMenu('drinks'); changeNav()}} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>DRINKS</button>
        </div>
      </div>
    );

}

export default (MenuNavigation);