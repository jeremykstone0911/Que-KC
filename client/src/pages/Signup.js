import React, { Component } from "react";
import Navbar from "../components/Navbar/index";
import SignUp from "../components/SignupPage/SignUp";
import Footer from "../components/Footer/index";

// import FormUserDetails from "../components/UserSignupInfo";
// import FormPersonalDetails from "../components/FormPersonalDetails";
//
// import Success from "../components/Success";
// import UserForm from "../components/UserForm";

export default function Signup() {
  return (
    <>
      <Navbar /> 
      <SignUp />
      <Footer />
    </>
  );
}
