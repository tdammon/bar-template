import React from "react";
import style from "./MobileMenu.module.css";
import CallIcon from "@material-ui/icons/Call";
import companyLogo from "../CompanyImages/FrenchPress.png";
import homePicture from "../CompanyImages/cheese-and-bread.jpg";

const DessertMenu = () => {
  return (
    <div className={style.menu}>
      {/* Rework this section to map in items */}
      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>PINOT GRIGIO</div>
          <div className={style.menuItemPrice}>$5.00 glass / $18.00 Bottle</div>
        </div>
        {/* <div className={style.menuItemNotes}>
            <br></br>
            Chocolate<br></br> 
            With a bittersweet chocolate buttercream<br></br><br></br>
            Chocolate Salted Caramel<br></br>
            Salted caramel center topped with caramel buttercream<br></br><br></br>
            Red Velvet<br></br> 
            With cream cheese frosting<br></br><br></br>
            Chocolate Ganache<br></br>
            Topped with a ganache chocolate dunk<br></br><br></br>
            German Chocolate<br></br> 
            The classic with coconut pecan frosting<br></br><br></br>
            Cream Cheese Apple<br></br>
            Diced apples and cream cheese topped with maple frosting<br></br><br></br>
          </div> */}
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>SAUVIGNON</div>
          <div className={style.menuItemPrice}>$7.00 Glass / $25.00 Bottle</div>
        </div>
        {/* <div className={style.menuItemNotes}>
                <br></br>
                House made Oreos<br></br> 
                Rich chocolate cookie with vanilla cream filling<br></br><br></br>
                Coconut Macaroons<br></br>
                Chewy and dipped in dark chocolate<br></br><br></br>
                Sugar<br></br> 
                With a vanilla/almond icing and sprinkles<br></br><br></br>
                Pecan Sandies<br></br>
                With ground pecans and topped with a pecan half<br></br><br></br>
          </div> */}
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>MUSCAT</div>
          <div className={style.menuItemPrice}>$7.50 Glass / $25.00 Bottle</div>
        </div>
        {/* <div className={style.menuItemNotes}>
                <br></br>
                The Classic Brownie<br></br> 
                Made with bittersweet chocolate, chocolate chips and walnuts<br></br><br></br>
                Lemon Bars<br></br>
                Fresh lemon filling on a shortbread crust dusted with powdered sugar<br></br><br></br>
                Derby Bars<br></br> 
                Shortbread crust covered with a pecan chocolate chip pie filling<br></br><br></br>
                Cappuccino Brownie<br></br>
                Dark chocolate coffee brownie layer topped with cinnamon cream cheese
                filling and finished with coffee chocolate glaze<br></br><br></br>
            </div> */}
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>MERLOT</div>
          <div className={style.menuItemPrice}>$8.00 Glass / $28.00 Bottle</div>
        </div>
        {/* <div className={style.menuItemNotes}>
                <br></br>
                The Classic Brownie<br></br> 
                Made with bittersweet chocolate, chocolate chips and walnuts<br></br><br></br>
                Lemon Bars<br></br>
                Fresh lemon filling on a shortbread crust dusted with powdered sugar<br></br><br></br>
                Derby Bars<br></br> 
                Shortbread crust covered with a pecan chocolate chip pie filling<br></br><br></br>
                Cappuccino Brownie<br></br>
                Dark chocolate coffee brownie layer topped with cinnamon cream cheese
                filling and finished with coffee chocolate glaze<br></br><br></br>
            </div> */}
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>PORT</div>
          <div className={style.menuItemPrice}>
            $10.00 Glass / $35.00 Bottle
          </div>
        </div>
        {/* <div className={style.menuItemNotes}>
                <br></br>
                The Classic Brownie<br></br> 
                Made with bittersweet chocolate, chocolate chips and walnuts<br></br><br></br>
                Lemon Bars<br></br>
                Fresh lemon filling on a shortbread crust dusted with powdered sugar<br></br><br></br>
                Derby Bars<br></br> 
                Shortbread crust covered with a pecan chocolate chip pie filling<br></br><br></br>
                Cappuccino Brownie<br></br>
                Dark chocolate coffee brownie layer topped with cinnamon cream cheese
                filling and finished with coffee chocolate glaze<br></br><br></br>
            </div> */}
      </div>

      <div className={style.menuItem}>
        <div className={style.menuItemHeader}>
          <div className={style.menuItemTitle}>ZINFANDEL</div>
          <div className={style.menuItemPrice}>
            $6.00 Glass / $18.00 Bottle
          </div>
        </div>
        {/* <div className={style.menuItemNotes}>
                <br></br>
                The Classic Brownie<br></br> 
                Made with bittersweet chocolate, chocolate chips and walnuts<br></br><br></br>
                Lemon Bars<br></br>
                Fresh lemon filling on a shortbread crust dusted with powdered sugar<br></br><br></br>
                Derby Bars<br></br> 
                Shortbread crust covered with a pecan chocolate chip pie filling<br></br><br></br>
                Cappuccino Brownie<br></br>
                Dark chocolate coffee brownie layer topped with cinnamon cream cheese
                filling and finished with coffee chocolate glaze<br></br><br></br>
            </div> */}
      </div>
    </div>
  );
};

export default DessertMenu;
