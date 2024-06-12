import React from "react";
import "../styles/page.css";
import { EmailJS } from "../components/EmailJS";

const CustomClothes = () => {
  return (
    <div className="page">
      <h1>Custom Form</h1>
      <p>Welcome to the Custom Form page!</p>
      <EmailJS />
    </div>
  );
};

export default CustomClothes;
