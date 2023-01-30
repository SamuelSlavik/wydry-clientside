import React from "react";

import {HeaderProps} from "../types/interfaces";

function Header({text}: HeaderProps): JSX.Element {
  return (
    <div data-aos={"zoom-in"} data-aos-offset={"200"} className={"header"}>
      <h2>{text}</h2>
    </div>
  )
}

export default Header