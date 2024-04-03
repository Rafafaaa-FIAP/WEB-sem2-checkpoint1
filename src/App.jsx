import { Outlet } from "react-router-dom"
import React from "react";
import NavBar from "./components/Navbar/Nav"
import "./index.css"


function App() {

  return (
    <>
    <NavBar appearance="default"/>
    <Outlet/>
    </>
  )
}

export default App
