import React from 'react';
import { useHistory } from "react-router-dom";
import {BrowserView} from "react-device-detect";
import style from "./Desktop.module.css";

import ReactGA from 'react-ga';
ReactGA.pageview(window.location.pathname + window.location.search);
const trackingId = "UA-167603833-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: Math.random(),

})

const Browser=()=>{
    
    const history = useHistory()

    return (
      
        <BrowserView>
        <div className={style.app}>
        <div className={style.appContainer}>
            <div className={style.headerBar}>
                <div className={style.companyName}>
                    Company<br></br> Name
                </div>
                <div className={style.buttonsBox}>
                <button className={style.buttonActive} onClick={()=>history.push("/")}>
                    Home
                </button>
                <button className={style.button} onClick={()=>history.push("/services")}>
                    Services
                </button>
                {/* <button className={style.button} onClick={()=>document.getElementById('contactUs').scrollIntoView()} > */}
                <button className={style.button}>
                    Contact Us
                </button>
                </div>
            </div>
            <div className={style.slogan}>
                Display<br></br>Company<br></br>Slogan
           
                {/* <button className={style.consultationButton}>
                    FREE FIRST 30 MINUTE CONSULTATION
                </button> */}
            
            </div>
            </div>
        </div>
        </BrowserView>
     
    );
}

export default (Browser);