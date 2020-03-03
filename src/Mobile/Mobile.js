import React, { Component } from 'react';
import style from "./Mobile.module.css"


class Mobile extends Component {

  render() {
    return (
      <div className={style.app}>
        <div className={style.mobileHeader}>
          <div className={style.logoBox}>
            Logo Here
          </div>
          <div className={style.contactBox}>
          <a className={style.phoneNumberLink} href="tel:+900300400">Contact Us<br></br> 900 300 400</a>
          </div>
        </div>
        <div className={style.mainContent}>
          <div className={style.slogan}>
            Build<br></br>
            Better<br></br>
            Together<br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default (Mobile);