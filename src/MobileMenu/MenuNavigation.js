import React from 'react';
import { useHistory } from "react-router-dom";
import style from "./MobileMenu.module.css";

const MenuNavigation = ({setNav, setMenu}) => {

    const history = useHistory()


    return (
      <div style={{boxSizing: "border-box", backgroundColor: "darkgrey", height: "80vh", width: "100%", zIndex: "999", padding: "3rem", overflowX: "hidden", position: "fixed",}}>
        <div>
            <button onClick={()=>{setMenu('starters');  setNav(false); history.push("/menu") }} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>STARTERS</button>
        </div>
        <div>
            <button onClick={()=>{setMenu('breakfast'); setNav(false); history.push("/menu") }} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>BREAKFAST</button>
        </div>
        <div>
            <button onClick={()=>{setMenu('lunch'); setNav(false); history.push("/menu") }} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>LUNCH</button>
        </div>
        <div>
            <button onClick={()=>{setMenu('dinner'); setNav(false); history.push("/menu") }} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>DINNER</button>
        </div>
        <div>
            <button onClick={()=>{setMenu('dessert'); setNav(false); history.push("/menu") }} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>DESSERT</button>
        </div>
        <div>
            <button onClick={()=>{setMenu('drinks'); setNav(false); history.push("/menu") }} style={{border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "white", padding: "0.5rem 0rem 0.5rem 0rem"}}>DRINKS</button>
        </div>
      </div>
    );

}

export default (MenuNavigation);