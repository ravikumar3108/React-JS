import {React} from "react"
import Home from './components/Home'
import About from "./components/About"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./components/Conatct"
import "./App.css"
import Login from "./components/Login"


function App(){
  return(
    <>
      <BrowserRouter>
        <Navbar/>
            <Routes>
              <Route path="" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App





