import React from "react";
import Searchinput from "./Searchinput";

const Sidebar = () => {
  return (
    <div>
      <Searchinput />
      <div className=" divider px-3"></div>
      {/* <Conversations/>
        <Logoutbutton/> */}
    </div>
  );
};

export default Sidebar;
