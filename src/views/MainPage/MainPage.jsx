import React from "react";
import { SMainPage } from "./MainPage.styled";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { AdSlider } from "../../components/AdSlider";

export const MainPage = () => {
  return (
    <SMainPage>
      <Navbar />
      <div style={{ display: "flex", marginTop: "30px"}}>
        <Sidebar />
        <AdSlider />
      </div>
    </SMainPage>
  );
};
