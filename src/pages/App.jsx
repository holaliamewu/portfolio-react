import React from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";
import Home from "./Home";
import BlogOne from "./BlogOne";
import RandomsOne from './RandomsOne';
import RandomsTwo from './RandomsTwo';


export default function App() {
  return(
        <BrowserRouter >
          <Routes >
              <Route path="/" element={ <Home />} />
              <Route path='/randoms/i-love-whatever-youre-doing-keep-up' element={ <RandomsOne /> } />
              <Route path='/randoms/what-we-create-we-are' element={ <RandomsTwo /> } />
              <Route path='/blog/coding-is-not-hard' element={ <BlogOne /> } />
          </Routes>
        </BrowserRouter>
  )
}