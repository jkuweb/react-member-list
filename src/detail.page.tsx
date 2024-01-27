import React from "react";
import {useNavigate, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const navigate = useNavigate()
  const {login} = useParams()

  return (
    <>
      <h3>Hello from Detail Page: {login}</h3>
      <button onClick={() => navigate(-1)}>Atras</button>
    </>
  )
}