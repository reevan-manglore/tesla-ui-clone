import React from "react";
import logo from "../assets/tesla.svg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-indigo-50 scroll-smooth  sticky h-screen max-h-screen">
      <header className="App-header absolute top-0 w-full">
        <Navbar/>
      </header>
      <main className="h-screen snap-y">
        <div className="bg-sky-100 h-screen snap-start"></div>
        <div className="bg-orange-100 h-screen snap-start"></div>
        <div className="bg-yellow-100 h-screen snap-start"></div>
      </main>
    </div>
  );
}

export default App;
