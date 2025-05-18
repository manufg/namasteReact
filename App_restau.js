import React from "react";
import { createRoot } from "react-dom/client";



/**
 * 
 * Header 
 *   - Logo
 *  - Nav Items
 * * Body
 *   - Search bar
 *   - Restaurant Container
 * *     - Restaurant Card
 * Footer
 *    -Copyright
 *   - Links
 * *   - Address
 * *   - Contact
 * *   - Social Media Links
 */

const styleCard ={
    backgroundColor: "#f0f0f0",
}

 

const Header = () => {
  return (
    <header className="header">
         <div className="logo-container">
        <img className= "logo" src="https://c8.alamy.com/comp/2WHBN08/embroidered-patch-badge-with-burger-logo-on-an-isolated-transparent-background-2WHBN08.jpg" alt="Logo" style={{ height: "100px" }} />
        </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

const RestaurantCard = () => {
return (
    <div className="restaurant-card" style={styleCard}>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi" alt="Restaurant" className="restaurant-image" style={{ width: "100%" }} />
        <h3 style={{ color: "#000" }}>Meghana foods</h3>
          <p>Cuisine Type</p>
          <p>Rating: 4.5</p>

    </div>
);
};

const Body = () => {
  return (
    <main>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="restaurant-container">
        
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
       
      </div>
    </main>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
        //this is called component composition 
        <Header/>
        <Body/>
      <footer>
        <p>Copyright © 2025</p>
        <ul>
          <li>Links</li>
          <li>Address</li>
          <li>Contact</li>
          <li>Social Media Links</li>
        </ul>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
