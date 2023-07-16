import React from "react";
import { SMainPage } from "./MainPage.styled";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

export const MainPage = () => {
  return (
    <SMainPage>
      <Navbar />
      <div style={{ display: "flex", marginTop: "40px"}}>
        <Sidebar />
        <div
          className="background"
          style={{ flex: 3}}
        ></div>{" "}
        {/*temporary code */}
      </div>
    </SMainPage>
  );
};
