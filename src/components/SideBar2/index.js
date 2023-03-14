import React from "react";
import AsideImg from "../AsideImg";
import AsideTitle from "../AsideTitle";
import "./styles.css";
import WidgetRecentPosts from "../WidgetRecentPosts";
const SideBar2 = () => {
  return (
    <div class="side-bar-widget">
        <AsideTitle/>
        {
           [1,2,3].map(item => <WidgetRecentPosts/>) 
        }
       
    
    </div>
  );
};
export default SideBar2;
