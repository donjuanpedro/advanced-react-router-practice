import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import AreaChart from "./components/AreaChart";
import DonutChart from "./components/DonutChart";
import Dashboard from "./components/Dashboard";

import {
  BrowserRouter,
  Route,
  Switch
 } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
          {/* PUT YOUR ROUTES HERE 
          * /              -> Dashboard
* /charts        -> Charts
* /tables        -> Tables
* /settings      -> Settings
* /wall          -> Wall
* /profiles      -> Profiles
* /marquee/:text -> Marquee
* /profile/:id   -> Profile*/}
          <Switch>
           <Route path="/" component={Dashboard} />
           <Route path="/charts" render={(props) => {
             return (
               <div>
                 <AreaChart />
                 <DonutChart />
               </div>
             );
           }} />
           </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>

  );
}


export default App;
