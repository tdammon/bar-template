import React, { Component } from 'react';
import style from "./DesignView.module.css";
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import CreateIcon from '@material-ui/icons/Create';
import InfoIcon from '@material-ui/icons/Info';

class DesignView extends Component {

  render() {
    return (
      <div className={style.app}>
          <div className={style.mobileHeader}> 
            <div className={style.logoBox}>
              Logo Here
            </div>
            <div className={style.contactBox}>
              <a className={style.phoneNumberLink}>Navagation<br></br>Designs</a>
            </div>
           </div>

        <div className={style.navOptions}>
        <div className={style.content} id="contentOne">
          <div className={style.header}>
              5 Button View
              <button className={style.buttonForward} onClick={()=>document.getElementById('contentTwo').scrollIntoView({behavior: "smooth"})} >
              &#62;
            </button>
          </div>
            <div className={style.NavBar}>
                <div className={style.NavButtonFive} >
                <HomeIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Home</div>
                </div>
                <div className={style.NavButtonFive} >
                <MailOutlineIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Contact</div>
                </div>
                <div className={style.NavButtonFive}>
                <CallIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Services</div>
                </div>
                <div className={style.NavButtonFive}>
                <CreateIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Designs</div>
                </div>
                <div className={style.NavButtonFive} >
                <InfoIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Info</div>
                </div>
            </div>
            </div>

            <div className={style.content} id="contentTwo">
            <div className={style.header}>
              4 Button View
              <button className={style.buttonBack} onClick={()=>document.getElementById('contentOne').scrollIntoView({behavior: "smooth"})} >
              &#60;
            </button>
            <button className={style.buttonForward} onClick={()=>document.getElementById('contentThree').scrollIntoView({behavior: "smooth"})} >
              &#62;
            </button>
            </div>
            <div className={style.NavBar}>
                <div className={style.NavButtonFour} >
                <HomeIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Home</div>
                </div>
                <div className={style.NavButtonFour} >
                <MailOutlineIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Contact</div>
                </div>
                <div className={style.NavButtonFour} >
                <CallIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Services</div>
                </div>
                <div className={style.NavButtonFour} >
                <CreateIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Designs</div>
                </div>
            </div>
            </div>

            <div className={style.content} id="contentThree">
            <div className={style.header}>
              3 Button View
              <button className={style.buttonBack} onClick={()=>document.getElementById('contentTwo').scrollIntoView({behavior: "smooth"})} >
              &#60;
            </button>
            </div>
            <div className={style.NavBar}>
                <div className={style.NavButtonThree} >
                <HomeIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Home</div>
                </div>
                <div className={style.NavButtonThree} >
                <MailOutlineIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Contact</div>
                </div>
                <div className={style.NavButtonThree} >
                <CallIcon style={{fontSize: "1rem"}}/><div className={style.buttonText}>Services</div>
                </div>
            </div>
            </div>
        </div> 
      </div>
    );
  }
}

export default (DesignView);