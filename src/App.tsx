import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Suspense, lazy } from 'react';
import backgroundImage from "../src/assets/background.png"

const Home = lazy(() => import('./pages/Home'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Project = lazy(() => import('./pages/Project'));

export default function App() {

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route 
            path="/" 
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            } 
          />
          <Route 
            path="/aboutme" 
            element={
              <Suspense fallback={<Loading />}>
                <AboutMe />
              </Suspense>
            } 
          />
          <Route 
            path="/project" 
            element={
              <Suspense fallback={<Loading />}>
                <Project />
              </Suspense>
            } 
          />
        </Routes>
      </Suspense>
    </Router>

  )
}

function Loading() {
  return (
    <section 
            className="min-h-screen bg-cover bg-center bg-no-repeat pt-[15vh] pb-[25vh]" 
            style={{ backgroundImage: `url(${backgroundImage})` }} 
        > 
      <div className="text-center space-y-8">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-gray-600 mx-auto"></div>
        <div>
          <h2 className='[font-family:"pf-pixelscript",sans-serif] text-3xl font-bold text-gray-800 mb-3'>Loading now...</h2>
          <p className='[font-family:"high1-wonchuri-body",sans-serif] text-lg text-gray-600'>잠시만 기다려주세요</p>
        </div>
      </div>
    </section>
  );
}
