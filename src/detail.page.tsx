import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <h3>Hello from Detail Page</h3>
      <button onClick={() => navigate(-1)}>Atras</button>
    </>
  )
}