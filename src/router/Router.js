import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Site components
import Site from "../pages/site/Site";
import Home from "../pages/site/Home";
import AboutUs from "../pages/site/AboutUs";
import Start from "../pages/site/Start";
import Memories from '../pages/site/Memories';
import Thoughts from '../pages/site/Thoughts';
import Events from '../pages/site/Events';

import PersonalDetails from "../pages/users/PersonalDetails";

import Login from "../pages/site/Login";

// Users components
import Users from "../pages/users/Users";
import Homepage from "../pages/users/Homepage";
import AboutFamily from "../pages/users/AboutFamily";
import BelovedPerson from "../pages/users/BelovedPerson";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* site components */}
        <Route path="/" element={<Site />}>
          <Route path="" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="start" element={<Start />} />
          <Route path="memories" element={<Memories />} />
          <Route path="thoughts" element={<Thoughts />} />
          <Route path="events" element={<Events />} />
        </Route>

          <Route path="personaldetails" element={<PersonalDetails />} />
          <Route path="login" element={<Login />} />
    
        {/* users components */}
        <Route path="/users" element={<Users />}>
          <Route path="" element={<Homepage />} />
          <Route path="aboutfamily" element={<AboutFamily />} />
          <Route path="belovedperson" element={<BelovedPerson />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
