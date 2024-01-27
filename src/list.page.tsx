import React from "react";
import { Link } from "react-router-dom";

export const ListPage: React.FC = () => {
  return (
    <>
    <h2>Hello from List Page</h2>
    <Link to="/detail">Go to Detail</Link>
    </>
  )
}