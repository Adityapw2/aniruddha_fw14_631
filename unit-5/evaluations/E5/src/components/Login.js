import React, { useState, useContext } from "react";

const Login = () => {
  return (
    <div>
      Login
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input name="email" type="email" placeholder="Enter Email" />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
