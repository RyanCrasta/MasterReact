import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const TimePass = () => {
  // for loop in JSX react
  const items = ["Html", "C#", "Css"];
  const elements = [];
  for (const [index, value] of items.entries()) {
    elements.push(<li key="{index}">{value}</li>);
  }
  return <div>{elements}</div>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
