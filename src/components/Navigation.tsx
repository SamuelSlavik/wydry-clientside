import React from "react";
import {NavLink, Link} from "react-router-dom";
import css from "*.scss";

// images
import logo from "../assets/images/wydry-svg/wydra-white.svg"

function Navigation(): JSX.Element {
  const navigationToggleOn = () => {
    document.getElementById("navigation-content--responsive")!.style.display = "block";
    document.getElementById("hamburger")!.style.display = "none";
    document.getElementById("cross")!.style.display = "block";
  }
  const navigationToggleOf = () => {
    document.getElementById("navigation-content--responsive")!.style.display = "none";
    document.getElementById("hamburger")!.style.display = "block";
    document.getElementById("cross")!.style.display = "none";
  }

  return (
    <>
      <div className={"logo"}>
        <Link to={"/"}>
          <img alt={"logo"} src={logo}/>
        </Link>
      </div>

      <div className={"navigation-wrapper"}>
        <div className={"navigation"}>
          <NavLink to={"/"} >Aktuálně</NavLink>
          <NavLink to={"/about"} >O Wydrách</NavLink>
          <NavLink to={"/information"} >Pre členov</NavLink>
          <NavLink to={"/gallery"} >Galéria</NavLink>
          <NavLink to={"/contact"} >Kontakt</NavLink>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="	#030330" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,170.7C384,171,480,117,576,96C672,75,768,85,864,101.3C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      <div className={"navigation--responsive"}>
        <div className={"navigation--responsive__top"}>
          <div className={"logo-wrapper--responsive"}>
            <Link to={"/"}>
              <img className={"logo--responsive"} alt={"logo"} src={logo}/>
            </Link>
          </div>
          <div className={"hamburger"} id={"hamburger"}>
            <a onClick={navigationToggleOn}>
              <i className="fa fa-2x fa-bars" aria-hidden="true"></i>
            </a>
          </div>
          <div className={"cross"} id={"cross"}>
            <a onClick={navigationToggleOf}>
              <i className="fa fa-2x fa-times" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className={"navigation-content--responsive"} id={"navigation-content--responsive"}>
          <NavLink to={"/"} onClick={navigationToggleOf}>Aktuálně</NavLink>
          <NavLink to={"/about"} onClick={navigationToggleOf}>O Wydrách</NavLink>
          <NavLink to={"/information"} onClick={navigationToggleOf}>Pre členov</NavLink>
          <NavLink to={"/gallery"} onClick={navigationToggleOf}>Galéria</NavLink>
          <NavLink to={"/contact"} onClick={navigationToggleOf}>Kontakt</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navigation