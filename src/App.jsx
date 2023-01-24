import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import ProductView from "./components/ProductView";
import modelS from "../assets/ms-main-hero-desktop.jpg";
import modelX from "../assets/MX-Hero-Desktop.jpg";
import modelY from "../assets/model-y_R1@2.jpg";
import model3 from "../assets/M3-Homepage-D.jpg";
import solarPanel from "../assets/solar-panel-desktop.jpg";

function App() {

  return (
    <div className="App  scroll-smooth snap-y snap-mandatory  h-screen max-h-screen overflow-auto">
      <header className="App-header absolute top-0 w-full" >
        <Navbar />
      </header>
      <main>
        <ProductView
          bgImage={modelS}
          hedding="Model S"
          subText="Order Online For"
          linkText="Touchless Delivery"
          linkHref="#"
          primaryButtonText="Custom Order"
          secondoryButtonText="Existing Inventory"
        />


        <ProductView
          bgImage={modelX}
          hedding="Model X"
          subText="Order Online For"
          linkText="Touchless Delivery"
          linkHref="#"
          primaryButtonText="Custom Order"
          secondoryButtonText="Existing Inventory"
        />

        <ProductView
          bgImage={modelY}
          hedding="Model Y"
          subText="Order Online For"
          linkText="Touchless Delivery"
          linkHref="#"
          primaryButtonText="Custom Order"
          secondoryButtonText="Existing Inventory"
        />

        <ProductView
          bgImage={model3}
          hedding="Model 3"
          subText="Order Online For"
          linkText="Touchless Delivery"
          linkHref="#"
          primaryButtonText="Custom Order"
          secondoryButtonText="Existing Inventory"
        />

        <ProductView
          bgImage={solarPanel}
          hedding="Solar Panel"
          subText="Lowest Cost Panels In America"
          primaryButtonText="Order Now"
          secondoryButtonText="Learn More"
        />



      </main>
    </div>
  );
}

export default App;
