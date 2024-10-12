import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GetUser = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logOut();
      }
    }

    setUser(JSON.parse(localStorage.getItem("user")));
  }, [setUser]);

  return { user, setUser, logOut };
};

export default GetUser;
