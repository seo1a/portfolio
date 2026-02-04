import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import GoBackButton from "./components/GoBackButton"

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/aboutme" 
            element={<AboutMe />} 
          />
          <Route 
            path="/project" 
            element={<Project />} 
          />
        </Routes>

        <GoBackButton />
      </Router>
    </>
  )
}

