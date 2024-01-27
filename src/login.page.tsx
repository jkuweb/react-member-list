import React from "react";

export const LoginPage: React.FC = () => {
  const [userFormData, setUserFormData] = React.useState({
    userName: '',
    password: ''
  })
  return (
    <>
      <h1>Login</h1>
      <label htmlFor="userName">Name:</label>
      <input type="text" id="userName" value={userFormData.userName} onChange={(e) => setUserFormData({
        ...userFormData,
        userName: e.target.value
      })} placeholder="Please, insert your name" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={userFormData.password} onChange={(e) => setUserFormData({
        ...userFormData,
        password: e.target.value})} placeholder="Please, insert your password"/>
      <button>Enter</button>
      
       </>
  )
}