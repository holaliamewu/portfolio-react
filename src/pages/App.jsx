import React from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";
import Layout from './Layout'
import About from "./About";
import ProjectContainer from "./ProjectContainer";
import Blog from "./Blog";
import Home from "./Home";
import BlogOne from "./BlogOne";


export default function App() {
  return(
        <BrowserRouter >
          <Routes >
            <Route path='/'  element={ <Layout /> } >
              <Route index element={ <Home />} />
              <Route path='/about' element={ <About /> } />
              <Route path='/projects' element={ <ProjectContainer /> } />
              <Route path='/blog' element={ <Blog /> } />
              <Route path='/blog/coding-is-not-hard' element={ <BlogOne /> } />
            </Route>
          </Routes>
        </BrowserRouter>
  )
}