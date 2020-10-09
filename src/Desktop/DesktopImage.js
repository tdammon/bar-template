import React from 'react';
import {BrowserView} from "react-device-detect";
import style from "./Desktop.module.css";
import homePage from "../CompanyImages/homePage.png"


const BrowserImage=()=>{
    
    return (
      
        <BrowserView>
        <div className={style.appImage}>
            <img src={homePage} />
        </div>
        </BrowserView>
     
    );
}

export default (BrowserImage);