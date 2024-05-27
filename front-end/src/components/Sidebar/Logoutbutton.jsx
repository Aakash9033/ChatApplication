import React from "react";
import { BiLogOut } from "react-icons/bi";
import Uselogout from "../../hooks/Uselogout";
const Logoutbutton = () => {
  const { loading, logout } = Uselogout();
  return (
    <div className=" mt-auto">
      {!loading ? (
        <BiLogOut
          onClick={logout}
          className=" w-6 h-6 text-white cursor-pointer"
        />
      ) : (
        <span className=" loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Logoutbutton;
