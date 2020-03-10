import React, { Component } from 'react';
import style from "./MobileServices.module.css"


class MobileServices extends Component {

  render() {
    return (
      <div className={style.app}>
      <div className={style.pageOne}>
        <div className={style.mobileHeader}> 
          <div className={style.logoBox}>
            Logo Here
          </div>
          <div className={style.contactBox}>
          <a className={style.phoneNumberLink} href="tel:+900300400">Contact Us<br></br> 900 300 400</a>
          </div>
        </div>
        <div className={style.mainContent}>
           <div className={style.contentOne}>
           <div className={style.contentView}>
               View One
           </div>
           </div>
           <div className={style.contentTwo}>
           <div className={style.contentView}>
               View Two
           </div>
           </div>
           <div className={style.contentThree}>
           <div className={style.contentView}>
               <span style={{color: "black"}}>View Three</span>
           </div>
           </div>
        </div>
        </div>
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