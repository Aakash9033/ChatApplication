import React, { useState } from "react";
import { UseAuthContext } from "../context/Context";
import toast from "react-hot-toast";

const Uselogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = UseAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default Uselogout;
