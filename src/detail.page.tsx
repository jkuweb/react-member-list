import React from "react";
import { Link } from "react-router-dom";

export const DetailPage: React.FC = () => {
  return (
    <>
      <h3>Hello from Detail Page</h3>
      <Link to="/">Go Home</Link>
    </>
  )
}