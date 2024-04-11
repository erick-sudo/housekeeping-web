import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes, useLocation } from "react-router-dom";
import TopNavigationBar from "./components/navigation/TopNavigationBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import ResetLinkSent from "./components/ResetLinkSent";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const standAloneRoutes = [
    "/login",
    "/signup",
    "/reset_password",
    "/reset_link_sent",
    "/forgot_password",
  ];

  const { pathname } = useLocation();

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {!standAloneRoutes.includes(pathname) && <TopNavigationBar />}
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/reset_link_sent" element={<ResetLinkSent />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
          </Routes>
        </div>
        {!standAloneRoutes.includes(pathname) && <Footer />}
      </div>
    </>
  );
}

export default App;
