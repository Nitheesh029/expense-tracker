import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
