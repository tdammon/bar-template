import React from 'react';
import { useHistory } from "react-router-dom";
import style from "./MobileNavFourButton.module.css"
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import CreateIcon from '@material-ui/icons/Create';


const MobileNavFourButton=()=> {
    const history =useHistory()

    return (
      <div className={style.NavBar}>
        <div className={style.NavButton} onClick={()=>history.push("/")}>
        <HomeIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Home</div>
        </div>
        <div className={style.NavButton} onClick={()=>history.push("/contact")}>
        <MailOutlineIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Contact</div>
        </div>
        <div className={style.NavButton} onClick={()=>history.push("/services")}>
        <CallIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Services</div>
        </div>
        <div className={style.NavButton} onClick={()=>history.push("/designs")}>
        <CreateIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Designs</div>
        </div>
      </div>
    );
}

export default (MobileNavFourButton);