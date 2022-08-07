import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { Initial } from "../pages/Initial";
import { Login } from "../pages/Login";
import {history} from './history.js';
//import PrivateRoute from './privateRoute.js';


export default function RoutesDefalt(){
  return(
    <BrowserRouter>
      <Routes history = {history}>
        <Route exact path="/hokage" element={<Login />} />
        <Route exact path="/hokage/index" element={<Initial/>} />
        <Route exact path="/hokage/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}
