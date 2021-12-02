import React from "react";
import AboutUs from "../../CompanyImages/MobileOurStory.png";
import "./MobileAboutUs.css";
// import MenuNavigation from "../MenuNavigation/MenuNavigation";

const MobileAboutUs = ({ nav, setNav, menuList, setFilter }) => {
  return (
    <div className="app">
      {/* {nav ? (
        <MenuNavigation
          setNav={setNav}
          menuList={menuList}
          setFilter={setFilter}
        />
      ) : ( */}
      <img className="about-us-img" src={AboutUs} alt="about us text" />

      {/* <div className="mainContent">
        <h1>Our Story</h1>
        <div>
          <h2>Message from Lance Westby, Backwater BBQ owner:</h2>
          <p>
            Welcome to Backwater BBQ! I wasn’t always in the BBQ business, but
            BBQ has always been a passion of mine. I grew up in Winona in the
            70’s and 80’s, attended Winona State University, and have called
            Winona my home for my entire life. I spent the first half of my
            adult life doing safety / environmental work for various companies
            in the area. During this time period, I learned all I could about
            BBQ and cooking in general from my family, friends and through vast
            research on different BBQ styles and recipes. I have cooked for
            gatherings with family and friends for many years, and over time,
            was able to create a number of recipes that became friend and family
            approved. During the pandemic of 2020, I did some soul searching and
            realized that I needed to change jobs and start doing something I
            truly loved - and that’s how we came to be.<br></br>
            <br></br> The recipes I became known for while cooking for family
            and friends are the same recipes you will see used on our menu
            today. These include our homemade sides, bacon, smoked andouille
            sausage, fresh sausages, and our pork, beef and chicken offerings.
            We keep our menu very simple in order to give our customers the
            quality, freshness and consistency they deserve. We serve 5 basic
            meats and 5 basic sides and we do this fresh every day for that
            day’s service. Because we prepare our food fresh every day, we may
            run out of menu items before normal closing hours. We’re sorry, but
            when it’s gone - it’s gone. We’ll have more freshly made for you the
            next day.
          </p>
        </div>
        <div>
          <h2>Backwater BBQ Key Priorities</h2>
          <p>
            <ul>
              <li>
                We will always strive to be Winona’s premiere location to get
                fresh, good tasting BBQ that is consistent time after time.
              </li>
              <li>
                We have plenty of indoor seating available, but our main focus
                is the convenience of call in or online ordering, our drive
                through pick-up window, and quick take out meals.
              </li>
              <li>
                We will always strive to buy local whenever feasible and form
                partnerships with other local businesses.
              </li>
              <li>
                We are concerned about our environment, and as a result, we
                utilize eco-friendly packaging and utensils whenever available.
              </li>
              <li>
                We will be known as a local business that cares about Winona and
                it’s citizens and continuously prove this through our actions.
              </li>
            </ul>
          </p>
        </div>
      </div> */}
      {/* )} */}
    </div>
  );
};

export default MobileAboutUs;
