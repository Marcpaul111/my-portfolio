import React from "react";
import { links } from "../lib/data";
import Header from "./header";
import HamburgerMenu from "./hamburger-menu";

export default function NavBar() {
  return <nav>
    <HamburgerMenu links={links}/>
    <Header links={links}/>
  </nav>;
}
