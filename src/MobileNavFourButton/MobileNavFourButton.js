import React from 'react';
import { useHistory } from "react-router-dom";
import style from "./MobileNavFourButton.module.css"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import CreateIcon from '@material-ui/icons/Create';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';


const MobileNavFourButton=()=> {
    const history =useHistory()

    return (
      <div className={style.NavBar}>
        <div className={style.NavButton} onClick={()=>history.push("/")}>
        <HomeOutlinedIcon style={{fontSize: "1.25rem"}}/><div className={style.buttonText}>Menu</div>
        </div>
        <div className={style.NavButton} onClick={()=>history.push("/specials")}>
        <RestaurantMenuOutlinedIcon style={{fontSize: "1.25rem"}}/><div className={style.buttonText}>Cater</div>
        </div>
        <div className={style.NavButton} onClick={()=>history.push("/catering")}>
        <StarBorderOutlinedIcon style={{fontSize: "1.25rem"}}/><div className={style.buttonText}>Specials</div>
        </div>
        <div className={style.NavButton} onClick={()=>history.push("/contact")}>
        {/* <CreateIcon style={{fontSize: "1.25rem"}}/> */}
        <PhoneOutlinedIcon style={{fontSize: "1.25rem"}}/><div className={style.buttonText} onClick={()=>history.push("/contact")}>Contact</div>
        </div>
      </div>
    );
}

export default (MobileNavFourButton);