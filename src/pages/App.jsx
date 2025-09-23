import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";
import Home from "./Home";
import ThoughtOne from "./t-01";
import ThoughtTwo from './t-02';
import ThoughtThree from './t-03';
import { routes } from "../resources/routesData";

export default function App() {
  return(
        <BrowserRouter >
          <Routes >
            {
              routes.map((route) => (
                <Route 
                key={route.path}
                path={route.path} 
                element={ <route.element />} />
              ))
            }
          </Routes>
        </BrowserRouter>
  )
}