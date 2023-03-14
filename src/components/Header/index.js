import React from "react";
import H2 from "../H2";
import HeaderLeft from "../HeaderLeft";
import HeaderRight from "../HeaderRight";
import "./styles.css";
export const Header = () => {
  return (
    <header>
      <div class="container container-flex">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  );
};
