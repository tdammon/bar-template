import React, { Component } from 'react';
import style from "./MobileServices.module.css"
// import axios from 'axios'
// import BreakFastMenu from "../MobileMenu/BreakfastMenu"

class MobileServices extends Component {

  render() {
    return (
      <div className={style.app}>
      <div style={{width: "100%", height: "100%", backgroundColor:"white", padding: "1rem", fontSize:"2.5rem"}}>Under Construction</div>
      {/* <div className={style.pageOne}>
        <div className={style.mobileHeader}> 
          <div className={style.logoBox}>
            Logo Here
          </div>
          <div className={style.contactBox}>
          <a className={style.phoneNumberLink} href="tel:+900300400">Contact Us<br></br> 900 300 400</a>
          </div>
        </div>
        <div className={style.mainContent}>
           <div className={style.contentOne} id="contentOne">
            {/* <div className={style.contentView}>
               View One
            </div> */}
            {/* <BreakFastMenu />
            <button className={style.buttonForward} onClick={()=>document.getElementById('contentTwo').scrollIntoView({behavior: "smooth"})} >
              &#62;
            </button>
           </div>
           <div className={style.contentTwo} id="contentTwo">
            <div className={style.contentView}>
               View Two
            </div>
            <button className={style.buttonBack} onClick={()=>document.getElementById('contentOne').scrollIntoView({behavior: "smooth"})} >
              &#60;
            </button>
            <button className={style.buttonForward} onClick={()=>document.getElementById('contentThree').scrollIntoView({behavior: "smooth"})} >
              &#62;
            </button>
           </div>
           <div className={style.contentThree} id="contentThree">
            <div className={style.contentView}>
               <span style={{color: "black"}}>View Three</span>
            </div>
            <button className={style.buttonBack} onClick={()=>document.getElementById('contentTwo').scrollIntoView({behavior: "smooth"})} >
              &#60;
            </button>
           </div>
        </div>
        </div>  */}
        {/* <div className={style.pageOne}>
        <div className={style.mobileHeader}> 
          <div className={style.logoBox}>
            Logo Here
          </div>
          <div className={style.contactBox}>
          <a className={style.phoneNumberLink} href="tel:+900300400">Contact Us<br></br> 900 300 400</a>
          </div>
        </div>
        <div className={style.mainContent}>
          <div className={style.contentTwo}></div>
        </div>
        </div> */}
      </div>
    );
  }
}

export default (MobileServices);