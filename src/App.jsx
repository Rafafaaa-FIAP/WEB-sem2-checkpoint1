import { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./components/Navbar/Nav"
import Footer from "./components/Footer/Footer"
import "./index.css"


function App() {

  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/Home');
  }, []);

  return (
    <>
    <NavBar appearance="default"/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
