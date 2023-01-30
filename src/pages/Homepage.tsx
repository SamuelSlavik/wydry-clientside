import React from "react";
import {useEffect, useState} from "react";

// images
import wallpaper from "../assets/images/wallpaper1.jpg"
import {hover} from "@testing-library/user-event/dist/hover";
import Articles from "../components/Articles";
import logo from "../assets/images/wydry-logo.png"

function Homepage(): JSX.Element {
  return (
    <>
      <div className={"wallpaper"}></div>
      <div className={"quote quote--dark"}>
        <h2>OZ Čierne Wydry z Trojmezí</h2>
        <img
          alt={"image"}
          src={logo}
        />
      </div>
      <div className={""}>
        <Articles />
      </div>
    </>
  )
}

export default Homepage