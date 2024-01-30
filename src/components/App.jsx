import React from "react";
import { 
  BrowserRouter, 
  Link, 
  Routes, 
  Route } from "react-router-dom";

export default function App() {
  return(
        <BrowserRouter >
          <Routes >
            <Route to='/' element={ <Layout /> } >
              <Route index element={ <Home />} />
              <Route to='about' element={ <About /> } />
              <Route to='projects' element={ <Projects /> } />
              <Route to='contact' element={ <Contact /> } />
              <Route to='blog' element={ <Blog /> } />
              </Route>
          </Routes>
        </BrowserRouter>
  )
}