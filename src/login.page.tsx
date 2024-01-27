import React from "react";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => {
  return (
    <>
      <h1>Hello from Login Page</h1>
      <Link to="/list">Go to List</Link>
    </>
  )
}