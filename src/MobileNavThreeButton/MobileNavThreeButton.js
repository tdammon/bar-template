import React from 'react';
import { useHistory } from "react-router-dom";
import style from "./MobileNavThreeButton.module.css"
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';


const MobileNavThreeButton=()=> {
    const history =useHistory()

    return (
      <div className={style.NavBar}>
        <button className={style.NavButton} onClick={()=>history.push("/")}>
        <HomeIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Home</div>
        </button>
        <button className={style.NavButton} onClick={()=>history.push("/contact")}>
        <MailOutlineIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Contact</div>
        </button>
        <button className={style.NavButton} onClick={()=>history.push("/services")}>
        <CallIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Services</div>
        </button>
      </div>
    );
}

export default (MobileNavThreeButton);