import React from 'react';
import { useHistory } from "react-router-dom";
import style from "./MobileNavFiveButton.module.css"
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';


const MobileNavFiveButton=()=> {
    const history =useHistory()

    return (
      <div className={style.NavBar}>
        <div className={style.NavButton} onClick={()=>history.push("/")}>
        <HomeIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Home</div>
        </div>
        <div className={style.NavButton} onClick={()=>history.push("/contact")}>
        <MailOutlineIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Contact</div>
        </div>
        <div className={style.NavButton} onClick={()=>history.push("/call")}>
        <CallIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Services</div>
        </div>
        <div className={style.NavButton} onClick={()=>history.push("/call")}>
        <CallIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Services</div>
        </div>
        <div className={style.NavButton} onClick={()=>history.push("/call")}>
        <CallIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Services</div>
        </div>
      </div>
    );
}

export default (MobileNavFiveButton);