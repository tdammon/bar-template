import React from 'react';
import { useHistory } from "react-router-dom";
import {BrowserView} from "react-device-detect";
import style from "./Desktop.module.css";

const Browser=()=>{
    const history = useHistory()

    return (
      
        <BrowserView>
        <div className={style.app}>
        <div className={style.appContainer}>
            <div className={style.headerBar}>
                <div className={style.companyName}>
                    EVOLV<br></br> MOBILE
                </div>
                <div className={style.buttonsBox}>
                <button className={style.buttonActive} onClick={()=>history.push("/")}>
                    Home
                </button>
                <button className={style.button} onClick={()=>history.push("/services")}>
                    Services
                </button>
                <button className={style.button} onClick={()=>document.getElementById('contactUs').scrollIntoView()} >
                    Contact Us
                </button>
                </div>
            </div>
            <div className={style.slogan}>
                BUILD<br></br>BETTER<br></br>TOGETHER
           
                <button className={style.consultationButton}>
                    FREE FIRST 30 MINUTE CONSULTATION
                </button>
            
            </div>
            </div>
        </div>
        </BrowserView>
     
    );
}

export default (Browser);