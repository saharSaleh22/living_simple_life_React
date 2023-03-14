import React from "react";
import H2 from "../H2";
import HeaderLeft from "../HeaderLeft";
import MenuItem from "../MenuItem";
import "./styles.css";
const HeaderRight = () => {
  return (
    <nav>
      <ul>
        {[1, 2, 3].map((item) => (
          <MenuItem />
        ))}
      </ul>
    </nav>
  );
};
export default HeaderRight;
