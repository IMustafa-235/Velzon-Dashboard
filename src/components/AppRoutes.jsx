import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Analytics from "../pages/Analytics";
import Crm from "../pages/Crm";
import Layout from "./Layout";
import Error from "../pages/Error";
import ScrollTop from "./ScrollTop";
import SignIn from "./../pages/Authentication/SignIn";
import SignUp from "./../pages/Authentication/SignUp";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/crm" element={<Crm />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
