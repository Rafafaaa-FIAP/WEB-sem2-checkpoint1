import { Outlet } from "react-router-dom"
import NavBar from "./components/Navbar/Nav"
import Footer from "./components/Footer/Footer"
import "./index.css"


function App() {

  return (
    <>
    <NavBar appearance="default"/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
